import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

// eslint-disable-next-line react/prop-types
export const BlogProvider = ({ children }) => {
  // Obtener publicaciones
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fernandafamiliar.soy/wp-json/wp/v2/posts?per_page=10")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <BlogContext.Provider value={{ items }}> {children}</BlogContext.Provider>
  );
};
