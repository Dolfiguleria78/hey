// var a=45   // can be accessable
// console.log(a)
// output:

// [Running] node "c:\Users\dolfi\Desktop\web dev cohert\javascript\Scope\Hoisting\hoisting.js"
// 45

// [Done] exited with code=0 in 0.184 seconds


// console.log(a)    // is it possible ???(its not possible acc.to normal programming,it shows undefined)
// var a=45

// output:

// [Running] node "c:\Users\dolfi\Desktop\web dev cohert\javascript\Scope\Hoisting\hoisting.js"
// undefined

// [Done] exited with code=0 in 0.186 seconds

//in Hoisting variable bnane se phle hi tum use acces kr skte ho.
// var hoisted we can say and let/const also can be hoisted with TDZ(TEMPORAL DEAD ZONE).
// it is a special zone where a variable can be created with let/const exist but can be accessible.
// jab tk value assign nai ki h tb tk use access nai kr skte,it comes under the TDX.

// console.log(a)
// const a =45  // ReferenceError: Cannot access 'a' before initialization

const a = 45;
console.log(a); // Output: 45
