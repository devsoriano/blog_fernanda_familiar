import Footer from "../Footer";
import { Header } from "../Header";

/* eslint-disable react/prop-types */
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center mt-8">{children}</div>
      <Footer />
    </>
  );
};
