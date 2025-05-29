import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Elements from "./pages/Elements";
import Gallery from "./pages/Gallery";
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog-details" element={<BlogDetails />} />
          <Route path="elements" element={<Elements />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;