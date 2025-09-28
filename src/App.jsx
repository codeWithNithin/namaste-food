import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import PreLogin from "./layouts/PreLogin/PreLogin";
import Body from "./components/Body/Body";
import ContactUs from "./pages/ContactUs";
import RestourantMenu from "./pages/RestourantMenu";

function App() {
  return (
    // no lzy loading, here all the component are loaded, when the page is loaded or server is started.
    <Routes>
      <Route path="/" element={<PreLogin />}>
        <Route index element={<Body />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="/restourant/:id" element={<RestourantMenu />} />
      </Route>
    </Routes>
  );
}

export default App;
