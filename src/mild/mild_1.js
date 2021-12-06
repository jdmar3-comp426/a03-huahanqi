/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    return a + " + " + b + ' = ' + (a+b)
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    let arr = [];
    let x = 0;
    for(let i = startNumber; i <= endNumber; i++){
        arr[x] = i
        x++
    }
    return arr
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
const a = Math.min(...numbers);
const b = Math.max(...numbers);
const result = {max : b, min : a};
return result;
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    const result = array.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
    return result;
}

//console.log(countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]));
/*
console.log(sumToString(3,4));
console.log(getIncreasingArray(3,7));
console.log(maxAndMin([1,2,4,6,7]));
console.log(countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]));
*/
