import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState, Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./style/StyleComponent";

import { routes } from "./routes/Routes";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Loading />;
  }

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