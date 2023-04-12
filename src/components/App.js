import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Categories from "./Categories";
import About from "./About";
import Header from "./Header";
import Register from "./Register";
import Category from "./Category";
import Session from "./Session";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech" />} />
        <Route path="about" element={<About />} />

        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />}>
            <Route path=":sessionId" element={<Session />} />
          </Route>
          <Route index element={<h3>Select a caategory from above</h3>} />
        </Route>

        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />
        <Route
          path="*"
          element={<h1 className="not-found"> Page not found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
