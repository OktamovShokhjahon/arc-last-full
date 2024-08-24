import "./App.css";

// react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // v6...

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";

// layouts
import RootLayout from "./layouts/RootLayout";

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
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/blog",
          element: <Blog />,
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
