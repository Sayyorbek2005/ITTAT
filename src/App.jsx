import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./style/StyleComponent";
import { routes } from "./routes/Routes";
import ScrollToTop from "./components/scroll/ScrollToTop";
import { Suspense, useEffect } from "react";
import Loading from "./Loading";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Aos from "aos";

function App() {
   useEffect(() => {
      Aos.init({
        duration: 1000, // animatsiya davomiyligi
        once: true,     // faqat bir marta ishlaydi
      });
    }, []);
  return (
    <div className="App">
      <ScrollToTop />

      <Header />

      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((route, index) => (
            <Route data-aos="fade-down"
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;