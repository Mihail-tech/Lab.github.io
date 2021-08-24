
import React from "react";
import {
    NavLink
} from "react-router-dom";
  import Button from "@material-ui/core/Button";
import useStyles from "./style";


const Navbar = () => {
    const classes = useStyles();
    return (
        <div className = {classes.navbar}>
                <NavLink to = "/about" activeClassName = {classes.active} className = {classes.navLink} >
                    <Button variant="contained" color="primary"  >
                        About
                    </Button>
                </NavLink>
                <NavLink to = "/counter" activeClassName = {classes.active} className = {classes.navLink}>
                    <Button variant="contained" color="primary" >
                        Counter
                    </Button>
                </NavLink>
                <NavLink to = "/login" activeClassName = {classes.active} className = {classes.navLink}>
                    <Button variant="contained" color="primary" >
                        Login
                    </Button>
                </NavLink>
        </div>
    )
}

export default Navbar;