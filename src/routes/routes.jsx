import React from 'react';
import pathConstants from './pathConstants';

const Home = React.lazy(() => import("../pages/Home"));
const Projects = React.lazy(() => import("../pages/Projects"));
const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));


const routes = [
  { path: pathConstants.HOME, element: <Home /> },
  { path: pathConstants.ABOUT, element: <About />},,
  { path: pathConstants.PROJECTS, element: <Projects />},
  { path: pathConstants.CONTACT, element: <Contact />},
]

export default routes;