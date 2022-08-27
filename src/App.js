import React,{Component}from "react";  
import'./App.css';
import X from "./my project/pro.js";
import Projects from "./project";
import Project from "./arwa/Section.js";
import './arwa/section.css';
import Page2 from "./rehab/Page2";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
class pro extends Component{

  render(){

    return(
    <div>
    <Project/>

    
    <Page2/>
   
    <X/>
   
    <Projects/>

    </div>

    )
}
}export default pro;
