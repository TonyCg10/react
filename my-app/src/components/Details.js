/* eslint-disable array-callback-return */
import { useParams, useNavigate } from "react-router-dom";
import MockData from '../assets/MOCK_DATA.json';

import { motion } from 'framer-motion';

function Details(props) {

    const navigate = useNavigate();
    const { name } = useParams();
    const parameter = useParams();
    console.log(name, parameter)
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {MockData.map((person) => {

                if (name.match(person.first_name)) {

                    return (
                        <div key={person.id}>
                            {person.gender}
                        </div>
                    );
                }
            })}

            < button type="button" class="btn btn-outline-primary" onClick={() => navigate("/")}> Back </button>
        </motion.div >
    );
}

export default Details;