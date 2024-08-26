export function addFirstName(firstName) {
    return {
        type: 'ADD_FIRSTNAME',
        firstName: firstName,
    }
};

export function addLastName(lastName) {
    return {
        type: 'ADD_LASTNAME',
        lastName: lastName,
    }
};

export function addPerson(person) {
    return {
        type: 'ADD_PERSON',
        data: person
    }
}