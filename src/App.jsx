import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./style/StyleComponent";
import { routes } from "./routes/Routes";
import ScrollToTop from "./components/scroll/ScrollToTop";
import { Suspense } from "react";
import Loading from "./Loading";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  
  return (
    <div className="App">
      <ScrollToTop />

      <Header />

      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((route, index) => (
            <Route
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