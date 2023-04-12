import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Categories from "./Categories";
import About from "./About";
import Header from "./Header";
import Category from "./Category";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech" />} />
        <Route path="about" element={<About />} />

        <Route path="categories" element={<Categories />}>
          <Route path="category" element={<Category />} />
        </Route>
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
