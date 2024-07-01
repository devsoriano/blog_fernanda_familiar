import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../../routes/AppRoutes";

import "./App.css";
import { BlogProvider } from "../../Context";

const App = () => {
  return (
    <BlogProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </BlogProvider>
  );
};

export default App;
