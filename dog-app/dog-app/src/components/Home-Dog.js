/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { dogList } from "./dogList";

import { motion } from "framer-motion";
import "./styless.css"

function HomeDog(props) {
    const [query, setQuery] = useState("");


    return (
        <motion.div className=""

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >

            <nav className="dogHome" class="navbar bg-light navbar-expand-sm">
                <div class="container text-center">
                    <form class="d-inline-flex p-2 justify-content-center align-items-center" role="search">
                        <input class="form-control me-2" placeholder="Search" aria-label="Search" onChange={event => setQuery(event.target.value)} />

                        {dogList.filter(dog => {

                            if (query === "") {
                                //if query is empty
                                return dog;
                            } else if (dog.name.toLowerCase().includes(query.toLowerCase())) {
                                //returns filtered array
                                return dog;
                            }

                        }).map((dog) => (
                            <div className="info" key={dog.id}>
                                <Link to={'detail/' + dog.name}>
                                    <p>{dog.name}</p>
                                    <img src={dog.img} alt="Loading..." />
                                </Link>
                            </div>
                        ))}

                    </form>
                </div>
            </nav>

        </motion.div>
    )
}

export default HomeDog