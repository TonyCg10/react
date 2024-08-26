/* eslint-disable array-callback-return */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dogList } from "./dogList";

import { motion } from "framer-motion";

function DetailDog(props) {

    const navigate = useNavigate();
    const { name } = useParams()

    return (
        <motion.div className="dogDetail"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >

            {dogList.map((dog) => {
                if (name.match(dog.name)) {

                    return (
                        <div key={dog.id} >
                            <p>{dog.description}</p>
                        </div>
                    )
                }
            })}

            <br />
            <br />
            <br />
            <br />
            <br />

            <button type="button" class="btn btn-outline-primary" onClick={() => navigate("/")}> back </button>

        </motion.div>
    )
}

export default DetailDog