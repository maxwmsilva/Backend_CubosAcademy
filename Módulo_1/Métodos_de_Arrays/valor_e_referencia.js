let numero1 =5;
let numero2 = numero1;
numero1 = 10;
console.log("numero1 = ", numero1);
console.log("numero2 = ", numero2);

let obj1 = {prop:5}
let obj2 = obj1;
obj1.prop = 10;
obj2.prop = 20;
console.log("obj1", obj1);
console.log("obj2", obj2);
//obj.prop;

let array1 = [{
  0:1,
  1:2,
  2:3

}];
//let array1 = [1,2,3];
let array2 = array1;
array2.push(5);
console.log("array1", array1);
console.log("array2", array2);