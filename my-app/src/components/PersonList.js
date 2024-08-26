/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MockData from '../assets/MOCK_DATA.json';

import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

function PersonList() {
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(MockData.length / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const paginate = (pageNumbers) => {
        if (pageNumbers <= 0) {
            setCurrentPage(1)
        } else {
            setCurrentPage(pageNumbers)
        }
    };

    return (
        <motion.div

            initial={{ translateX: -500 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: -500 }}
        >
            <div id='table' data-testid='pl-1'>

                {/* Search Bar */}

                <motion.form class="d-flex" role="search" id='searcher'>
                    <motion.input id='inputSearcher' class="form-control me-2" type="search"
                        placeholder="Search by language" aria-label="Search"
                        onChange={event => setQuery(event.target.value)}

                        whileFocus={{
                            translateY: '-20px',
                            boxShadow: '0 15px 20px silver'
                        }}
                    />
                </motion.form>

                {/*  */}
                {/* Mockdata List */}

                {MockData.filter((person) => {
                    if (query === "") {
                        return person;
                    } else if (person.language.toLowerCase().includes(query.toLowerCase())) {
                        return person;
                    }
                }).map((person) => {
                    return (

                        <NavLink className='navLink' to={'details/' + person.first_name}>
                            <motion.ul key={person.id} id='list'>
                                <li>
                                    <img style={{ backgroundColor: 'white' }} srcSet={person.avatar} alt='loading...' />
                                </li>
                                <li id='listli'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                        fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                    </svg> <span style={{ fontWeight: 'bold' }}>Name</span>: {person.title} - {person.first_name} {person.last_name} - {person.suffix}
                                </li>
                                <li id='listli'> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                    fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                                </svg> <span style={{ fontWeight: 'bold' }}>Job</span>: <span id='listJobTitle'> {person.job_title} </span>
                                </li>
                            </motion.ul>
                        </NavLink>

                    )
                }).slice(indexOfFirstPost, indexOfLastPost)}

                {/*  */}
                {/* Pagination */}

                <nav aria-label="Page navigation example">

                    <ul class="pagination">
                        <li class="page-item">
                            <a onClick={() => paginate(currentPage - 10)} class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;10</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a onClick={() => paginate(currentPage - 1)} class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link disabled" href="#" aria-label="Previous">
                                <span aria-hidden="true">{currentPage - currentPage + 1}</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link disabled" href="#" aria-label="Previous">
                                <span aria-hidden="true">...</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link disabled" href="#" aria-label="Previous">
                                <span aria-hidden="true">{currentPage}</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link disabled" href="#" aria-label="Previous">
                                <span aria-hidden="true">...</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link disabled" href="#" aria-label="Previous">
                                <span aria-hidden="true">{MockData.length / 10}</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a onClick={() => paginate(currentPage + 1)} class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a onClick={() => paginate(currentPage + 10)} class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&raquo;10</span>
                            </a>
                        </li>
                    </ul>

                </nav>

                {/*  */}

            </div>
        </motion.div>
    )
}

export default PersonList;
