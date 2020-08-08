const students = [{
        id: 1,
        name: "Omar Sunny"
    },
    {
        id: 11,
        name: "Manna"
    },
    {
        id: 16,
        name: "Mahi"
    }
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const filteredIds = students.filter(s => s.id > 15);

console.log(names);
console.log(ids);
console.log(filteredIds);