// import React, { useState } from 'react';
// import { connect } from 'react-redux'
// import addPerson from './actions'
// import List from './List';

// function AddPerfil(props) {
//     const [person, setPerson] = useState('');

//     function handleChange(e) {
//         setPerson(e.target.value);
//     }

//     function handleSubmit(e) {
//         if (person !== '') {
//             props.addPerson(person);
//             setPerson('');
//         }
//         e.preventDefault();
//     }
//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input type="text"
//                     placeholder="Add new contact"
//                     onChange={handleChange}
//                     value={person} />
//                 <button type="submit">Add</button>
//             </form>
        
//             <div>
//                 <List/>
//             </div>
//         </>
//     );
// }

// const mapDipatchToProps = {
//     addPerson
// }

// export default connect(null, mapDipatchToProps)(AddPerfil)