// //global scoop
// console.log(sum);
// let sum=0;

// //function scoop
// function main(){
//     sum1=10;
//    console.log(sum1)
// }
// main()
// //block scope
// if(true){
// sum=9;
// console.log(sum)
// }
function equal(a, b, c) {
 
    if (a === b && b === c) {
      return 3;
    }
    else if (a === b || b === c || a === c) {
      return 2;
    }
    else {
      return 0;
    }
  }
  console.log(equal(3,4,3))
  function add(num) {
  
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(add(4))

  function factorial(num) {

    if (num === 0 || num === 1) {
      return 1;
    }
    else {
      return num * factorial(num - 1);
    }
  }
  console.log(factorial(5));
  function sumeven(num1, num2) {
    if (num1 % 2 === 0 && num2 % 2 === 0) {

      return num1 + num2;
    }
  }
  console.log(sumeven(5,15));
  function power(a,b){
    return Math.pow(a,b);
  }
  console.log(power(2,4)); 
  function palidrom(x){
   a1=x/1000;
   b=x/100%10;
   c=x/10%10;
   d=x%10;
   if(a1==d && c==b){
    return"yes";
   }
   else {
    return"no"
   }
     console.log(palidrom(1121))
  }


