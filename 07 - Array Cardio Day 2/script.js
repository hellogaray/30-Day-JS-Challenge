const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];
  
// Some and Every
currentYear = new Date().getFullYear()
const currentAge = (element) =>  (currentYear - element.year) > 19;

console.log(`Current Year: ${currentYear}`);
console.log(`Is Someone An Adult? ${people.some(currentAge)}`);
console.log(`Is Everyone An Adult? ${people.every(currentAge)}`);

// Find
function toFind(object, list) {
    // Find Object by text or id
    const found = (element => element.id === object || element.text === object) ;
    const index = list.findIndex(found)
    
    console.log(`Results: ${index}: ${list.find(found).text}, ${list.find(found).id}`);

    // Remove From Array
    list.splice(index, 1)

    console.log(`Index ${index} has been removed from array.`)
    console.table(list)
}



toFind(2039842, comments);
toFind('Super good', comments);