import { useState } from 'react';
import { NavLink, useNavigate, } from 'react-router-dom';
import { connect } from 'react-redux'

import { addFirstName, addLastName, addPerson } from './Redux/Actions/action';

import './Styles.css'

function NavBar(props) {

    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('');


    const [isOn] = useState(false)

    function handleChange(e) {
        setFirstName(e.target.value);
    }

    function handleSubmit(e) {
        if (firstName !== '') {
            props.addFirstName(firstName);
            navigate('perfil')
            setFirstName('');
        }
        e.preventDefault();
    }

    const success =
        <NavLink to='perfil'>
            <button type="button" class='btn btn-outline-success'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg> Perfil
            </button>
        </NavLink>

    const danger =
        <>
            <button type="button" class='btn btn-outline-danger' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg> Perfil
            </button>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Sign in</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div id='form'>
                                <form onSubmit={handleSubmit} class="row g-1 needs-validation">
                                    <div class="col-md-10 position-relative">
                                        <label for="validationTooltip01" class="form-label">Email</label>
                                        <input onChange={handleChange} value={firstName} type="email"
                                            class="form-control" id="validationTooltip01" required />
                                    </div>
                                    {/* <div class="col-md-4 position-relative">
                                        <label for="validationTooltip02" class="form-label">Last name</label>
                                        <input onChange={handleChange} value={lastName} type="text"
                                            class="form-control" id="validationTooltip02" required />
                                    </div> */}
                                    {/* <div class="col-md-4 position-relative">
                                        <label for="validationTooltip03" class="form-label">City</label>
                                        <input onChange={handleChange} value={person.city} type="text"
                                            class="form-control" id="validationTooltip03" required />
                                        <div class="invalid-tooltip">
                                            Please provide a valid city.
                                        </div>
                                    </div>
                                    <div class="col-md-3 position-relative">
                                        <label for="validationTooltip04" class="form-label">State</label>
                                        <select onChange={handleChange} value={person.state}
                                            class="form-select" id="validationTooltip04" required>
                                            <option selected disabled value="">Choose...</option>
                                            <option>FL</option>
                                            <option>MI</option>
                                        </select>
                                        <div class="invalid-tooltip">
                                            Please select a valid state.
                                        </div>
                                    </div>
                                    <div class="col-md-2 position-relative">
                                        <label for="validationTooltip05" class="form-label">Zip</label>
                                        <input onChange={handleChange} value={person.zip} type="text" class="form-control"
                                            id="validationTooltip05" required />
                                        <div class="invalid-tooltip">
                                            Please provide a valid zip.
                                        </div>
                                    </div> */}
                                    <div class="mb-1">
                                        <button class="btn btn-primary" data-bs-dismiss="modal" type="submit">Submit form</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    const profile = isOn === false ? danger : success;

    return (

        <div>
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div class="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>
            <nav class="navbar navbar-expand-xxl bg-light">
                <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Side Bar</button>
                <ul class="navbar-nav me-auto my-4 my-xl-3 navbar-nav-scroll">

                    <li class="nav-item ">
                        <NavLink to='/'>
                            <button type="button" class="btn btn-outline-secondary">Home</button>
                        </NavLink>
                    </li>
                </ul>

                {profile}

                {/* <NavLink to='login'>
                    <button type="button" class="btn btn-outline-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>  Log in
                    </button>
                </NavLink> */}
            </nav>
        </div>

    );

}

const mapDipatchToProps = {
    addFirstName,
    addLastName,
    addPerson
}

export default connect(null, mapDipatchToProps)(NavBar)