import MockData from '../assets/MOCK_DATA.json'

const MOCK_DATA = MockData.map((e) => { return (e.gender) })
const male = []
const female = []

for (let i = 0; i < MOCK_DATA.length; i++) {
    if (MOCK_DATA.at(i) === 'Male') {
        male.push("Male")
    }
}

for (let i = 0; i < MOCK_DATA.length; i++) {
    if (MOCK_DATA.at(i) === 'Female') {
        female.push("Female")
    }
}

console.log(male.length)
console.log(female.length)

describe('all must have gender', () => {
    test('male', () => {
        expect(male).toContain('Male')
    });
    test('female', () => {
        expect(female).toContain('Female')
    });
})