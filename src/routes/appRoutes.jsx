import React,{FC} from "react";
import { Routes,Route } from 'react-router-dom';
import About from '../components/about'
import Home from '../components/index'
import Projects from "../components/projects";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    )
   }
  
  
    export default AppRoutes