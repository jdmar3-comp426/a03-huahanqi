/**
 *
 * @param variable
 * @returns {{type: ("undefined"|"object"|"boolean"|"number"|"string"|"function"|"symbol"|"bigint"), value: *}}
 * example: identifyVariable(4);
 * returns: { type: 'number', value: 4 }
 */
export function identifyVariable(variable) {
   let a = typeof variable;
   let b = variable;
   const result = {type : a,value : b}
   return result;
}


/**
 *
 * @param array
 * @returns {[]}
 * example: identifyArray(['some', 3, [3, 4], false]);
 * returns: [
 { type: 'string', value: 'some' },
 { type: 'number', value: 3 },
 { type: 'object', value: [ 3, 4 ] },
 { type: 'boolean', value: false }
 ]

 */
export function identifyArray(array) {
   let result = []
   array.forEach(element => {
   result.push(identifyVariable(element))
});
   return result
}

/**
 * mutates the object that is passed in.
 * @param object
 * @param key
 * @returns {*} does not have to return anything
 *
 * example:
 * let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
 removeKey(obj, 'password');
 obj now does not contain the `password` field
 */
export function removeKey(object, key) {
delete object[key];
}

/**
 * Does not mutate the object passed in
 * @param object
 * @param key
 * @returns {*} The object with its keys removed
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
 obj = removeKeyNonDestructive(obj, 'password');
 obj will not have the `password` field only because it was assigned the result of the function.
 If only `removeKeyNonDestructive` was called, nothing would have changed.
 */
export function removeKeyNonDestructive(object, key) {
   let obj2 = Object.assign({}, object);
   delete obj2[key];
   return obj2;
}

/**
 * Remove and return the listed keys. Without mutating the object passed in.
 * @param object
 * @param {string[]} keyList
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *
 * example:


 let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
 };
 obj = removeKeys(obj, ['password', 'age']);
 // object not looks like this
 { name: 'Mr. Boss', title: 'boss' }

 * @return {*} The object with its keys removed.
 */
export function removeKeys(object, keyList) {
   for (let x = 0; x<keyList.length; x++) {
      object = removeKeyNonDestructive(object, keyList[x])
   }
   return object
}


//console.log(identifyArray(['some', 3, [3, 4], false]));

/*
console.log(identifyVariable('hh'));
console.log(identifyVariable(4));
console.log(identifyArray(['some', 3, [3, 4], false]));
let obj = {
   name: 'Mr. Boss',
   title: 'boss',
   age: 33,
   password: 'pass123'
};
removeKeyNonDestructive(obj, 'password');
console.log(obj)
let x = removeKeyNonDestructive(obj, 'password');
console.log(x)

let obj3 = {
   name: 'Mr. Boss',
   title: 'boss',
   age: 33,
   password: 'pass123'
};
obj3 = removeKeys(obj3, ['password', 'age']);
console.log(obj3)
*/