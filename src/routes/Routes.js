import Home from "../pages/home/Home";
import NotFound from "../components/notFound/NotFound";
// import OnlineCourses from "../pages/onlineCourses/OnlineCourses";
import Kurslar from "../pages/kurslar/Kurslar";
import Teachers from "../pages/ustozlar/Teachers";
import Online from "../pages/onlineCourses/Online";
import Course from "../pages/course/Course"

import ModalKons from "../components/modals/modalKonsultatsia/ModalKons"
import Ustoz from "../pages/ustoz/Ustoz";

export const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: 'online',
    element: <Online />
  },
  {
    path: "kurslar",
    element: <Kurslar />
  },
  {
    path: "ustozlar",
    element: <Teachers   />
  },
  {
    path: "*",
    element: <NotFound />
  },
  {
   path: "/kurslar/:id",
    element: <Course />
  },
  {
    path: "modalKons",
    element: <ModalKons />
  },
  {
    path: "/ustoz/:id",
    element: <Ustoz />
  }
];