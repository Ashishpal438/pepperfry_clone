import { Link } from "react-scroll";
import "./Scroll.css";
import arrow from './arrow.png'
const Scroll = () => {
    return ( <
        nav >
        <
        ul className = "header" >
        <
        li >
        <
        Link activeClass = "active"
        to = "App"
        spy = { true }
        smooth = { true }
        offset = {-100 }
        duration = { 500 } >
        <
        div > < img src = { arrow }
        className = "icon" / > < /div>  <
        /Link>  <
        /li>  <
        /ul> <
        /nav>
    );
};

export default Scroll;