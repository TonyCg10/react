/* eslint-disable array-callback-return */
import React from "react";
import { NavLink } from "react-router-dom";

import "./styless.css"
import { motion } from "framer-motion";

function Navbar(props) {


    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <nav className="navBar">
                <NavLink className="link" to='/'>Home</NavLink>
                {/* <NavLink className="toAnimations" to="animations">Animations</NavLink> */}
            </nav>

        </motion.div>
    )
}

export default Navbar