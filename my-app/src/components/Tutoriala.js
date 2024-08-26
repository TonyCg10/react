// import { useState } from 'react';
// import { connect } from 'react-redux'
// import { AddProfile } from '../actions'

// function Tutoriala(props) {

//     const [person, setPerson] = useState('');

//     function handleChange(e) {
//         setPerson(e.target.value);
//     }

//     function handleSubmit(e) {
//         if (person !== '') {
//             props.AddProfile(person);
//             setPerson('');
//         }
//         e.preventDefault();
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text"
//                 placeholder="Add new contact"
//                 onChange={handleChange}
//                 value={person} />
//             <button type="submit">Add</button>
//         </form>
//     );
// }

// const mapDipatchToProps = {
//     AddProfile
// }

// export default connect(null, mapDipatchToProps)(Tutoriala)