/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const saveToLocalStorage = (data) => {
    localStorage.setItem("blogItems", JSON.stringify(data));
  };

  const getFromLocalStorage = () => {
    const storedItems = localStorage.getItem("blogItems");
    return storedItems ? JSON.parse(storedItems) : [];
  };

  useEffect(() => {
    const storedItems = getFromLocalStorage();
    if (storedItems.length > 0) {
      setItems(storedItems);
    } else {
      fetch("https://fernandafamiliar.soy/wp-json/wp/v2/posts?per_page=10")
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
          saveToLocalStorage(data);
        });
    }
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      saveToLocalStorage(items);
    }
  }, [items]);

  return (
    <BlogContext.Provider value={{ items }}>{children}</BlogContext.Provider>
  );
};
