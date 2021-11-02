import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    var init = 0;
    for(let i = 0; i<array.length;i++){
        init = init + array[i]
    } 
    return init;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let bubbleSort = (inputArr) => {
        let len = inputArr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (inputArr[j] > inputArr[j + 1]) {
                    let tmp = inputArr[j];
                    inputArr[j] = inputArr[j + 1];
                    inputArr[j + 1] = tmp;
                }
            }
        }
        return inputArr;
    };
    var sorted = bubbleSort(array)
    if(sorted.length % 2 === 0){
        var idx_1 = sorted.length /2 - 1
        var idx_2 = sorted.length /2
        return (sorted[idx_1] + sorted[idx_2])/2
    } else{
        var idx_3 = (sorted.length+1)/2
        return sorted[idx_3]
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let len  = array.length;
    let sum = getSum(array);
    let mean = sum/len;
    let median = getMedian(array);
    let min = Math.min(...array);
    let max = Math.max(...array);

    function vari(arr){
        // Creating the mean with Array.reduce
        let mean = arr.reduce((acc, curr)=>{
          return acc + curr
        }, 0) / arr.length;
         
        // Assigning (value - mean) ^ 2 to every array item
        arr = arr.map((k)=>{
          return (k - mean) ** 2
        })
         
        // Calculating the sum of updated array
       let sum = arr.reduce((acc, curr)=> acc + curr, 0);
        
       // Calculating the variance
       let variance = sum / arr.length
       return variance
      }


    let varience = vari(array)
    let sd = Math.sqrt(varience);

    const result = {
    length : len,
    sum : sum,
    mean: mean,
    median: median,
    min: min,
    max: max,
    variance: varience,
    standard_deviation: sd}

    return result;
}

/*
let array = [3,2,5,6,2,7,4,2,7,5];
console.log(getMedian(array));
console.log(getStatistics(array))
console.log(getSum([1,2,3,4]))
let array = [3,2,5,6,2,7,4,2,7,5];
console.log(getMedian(array));
let arr2 = [3,2,4,5,5,5,2,6,7]

*/
