const solution = require('./solution'); 

const main = () => { 
    const args = process.argv.slice(2); 
    const params = JSON.parse(args); 

    console.log(solution.sum(...params)); 
}; 

main();