import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar (){
    return(
        <>
        <header>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Search'>Search</NavLink>
            <NavLink to='/MovieDetails'>MovieDetails</NavLink>
        </header>
        </>
    )
}
export default Navbar