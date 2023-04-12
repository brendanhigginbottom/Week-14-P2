const colors = ['teal', 'orange', 'green'];
//.push will add to existing array
colors.push('pink');
// Using [...colors] will make a new copy of the array
const colorsCopy = ['orand', ...colors, 'yellow'];

//colorsCopy.push('yellow');

console.log(colors);
