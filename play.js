// 


//----------------------------------------Objects----------------------------------------------------//
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hii, I am ' + this.name);
    }
};

//--------------------------Object destructuring-------------------------------------------//
// const printName = (personData) => {
//     console.log(person.name);
// }

//  

// printName(person);


// const copiedPerson = {...person};
// console.log(copiedPerson);

// const hobbies = ['Sports', 'Cooking'];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2); 

//-------------------------------------------Arrays-------------------------------------------//
// const hobbies = ['Sports', 'Cooking'];
//     for (let hobby of hobbies) {
//         console.log(hobby);
//     }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
// hobbies.push('Programming');
// console.log(hobbies);

// const copiedArray = hobbies.slice();
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray= (...args) =>
// {
//     return args;
// };
 
// console.log(toArray(1,2,3,4));


//----------------------------------Async and promises------------------------------//

const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve('Done!');
         }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
    .then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');