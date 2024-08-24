import "./App.css";

// react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // v6...

// pages
import Home from "./pages/Home";

// layouts
import RootLayout from "./layouts/RootLayout";
import Blogs from "./pages/Blogs";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
