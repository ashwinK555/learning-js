// creating array
const names =["ashwin","deepen","nikhil"];
const age = new Array(20,40,60);


// arrays are indexed and starts with 0
// console.log(names[0]); display ashwin in console

//displaying array data in document
document.getElementById("container1").innerHTML= names;
document.getElementById("container2").innerHTML= age;


//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
//But, JavaScript arrays are best described as arrays.

console.log(typeof(names));

//accessing array elements
names.forEach(( name)=>{
console.log(name);
})

for( let name of names){
    console.log(name);
}
// for displaying index we use 'in'
for(let name in names){
    console.log(name);

}
//as array are known a special type of objects so how to recognize them

console.log(Array.isArray(names)); //it will return true if it is array

//array methods

console.log(names.toString()); // converts arrrys to string separated by comma
console.log(names.at(20)); // returns array element at index 2
console.log(names.join("?")); //converts arrrys to string but also specifi the sepatator 
console.log(names.pop()); // deletes out the element from the last index ie 2
console.log(names.push("pushed")); // add new element to array to last index
console.log(names);
console.log(names.shift()); // return and removes the first element and shift other to lower index
console.log(names.unshift("atbegin"));// add new element at begining and return array length
console.log(names.concat(age)); // combines to array and return a new array

console.log(names.splice(1,2,"newsplice", "newsplice"));
console.log(names);
console.log(names.slice(1));//Slice out a part of an array starting from array 1
console.log(name.slice(0,2));//The method then selects elements from the start argument, and up to (but not including) the end argument.