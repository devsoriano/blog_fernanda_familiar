/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

export const BlogContext = createContext();

const initialState = {
  items: [],
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return { ...state, items: action.payload };
    case "MARK_AS_READ":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, read: true } : item
        ),
      };
    default:
      throw new Error("Acción no soportada");
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

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
      dispatch({ type: "SET_ITEMS", payload: storedItems });
    } else {
      fetch("https://fernandafamiliar.soy/wp-json/wp/v2/posts?per_page=10")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "SET_ITEMS", payload: data });
          saveToLocalStorage(data);
        });
    }
  }, []);

  useEffect(() => {
    if (state.items.length > 0) {
      saveToLocalStorage(state.items);
    }
  }, [state.items]);

  const markAsRead = (id) => {
    dispatch({ type: "MARK_AS_READ", payload: id });
  };

  return (
    <BlogContext.Provider value={{ state, markAsRead }}>
      {children}
    </BlogContext.Provider>
  );
};
