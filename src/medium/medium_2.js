import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";
import {getSum} from "./medium_1.js";
import {getMedian} from "./medium_1.js";
/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */

 

 let len  = mpg_data.length;
 let sum_city = mpg_data.reduce(function(sum, current) {
    return sum + current["city_mpg"];
  }, 0);
 let mean_mpg_city = sum_city/len;
 let sum_highway = mpg_data.reduce(function(sum, current) {
    return sum + current["highway_mpg"];
  }, 0);
 let mean_mpg_highway = sum_highway/len;

let year = []
for(let i =0; i < mpg_data.length; i++){
    year.push(mpg_data[i]["year"])
}

let sum_hybrid = mpg_data.reduce(function(sum, current) {
    if(current['hybrid']){
        return sum + 1
    } else {
        return sum ;
    }
  }, 0);

export const allCarStats = {
    avgMpg: {
        city : mean_mpg_city,
        highway: mean_mpg_highway
    },
    allYearStats: getStatistics(year),
    ratioHybrids: sum_hybrid/getStatistics(year)["length"]
};

//console.log(allCarStats["allYearStats"])

/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 * 
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
 let pick_hybrid = mpg_data.reduce(function(allhybrid, current) {
    if(current['hybrid']){
        allhybrid.push(current)
    }
    return allhybrid;
  }, []);
 
 let countedhybrid = pick_hybrid.reduce(function (allmakes, car) {
   if (car["make"] in allmakes) {
    allmakes[car["make"]]++
   }
   else {
    allmakes[car["make"]] = 1
   }
   return allmakes
 }, {})



var sortable = [];
for (var vehicle in countedhybrid) {
    sortable.push([vehicle, countedhybrid[vehicle]]);
}

sortable.sort(function(a, b) {
    return b[1] - a[1];
});



 
export const hybrid = (make, pick_hybrid) => {
    var list = []
        for(let x=0; x<pick_hybrid.length; x++){
            if(pick_hybrid[x]['make'] === make){
                list.push(pick_hybrid[x]["id"]);
            }
        }
        return list;
}



const Factory = (make, pick_hybrid) => {
    return { 
      make : make,
      hybrid: hybrid(make, pick_hybrid)
  };
};



var final = []
for(let i=0; i<sortable.length; i++){
    final.push(Factory(sortable[i][0], pick_hybrid))
}

//console.log(final)


let hybrid_2009 = mpg_data.reduce(function(allhybrid_2009, current) {
    if(current['year'] === 2009 && current['hybrid']){
        allhybrid_2009.push(current)
    }
    return allhybrid_2009;
  }, []);
let nothybrid_2009 = mpg_data.reduce(function(nothybrid_2009, current) {
    if(current['year'] === 2009 && !current['hybrid']){
        nothybrid_2009.push(current)
    }
    return nothybrid_2009;
  }, []);

  let hybrid_2010 = mpg_data.reduce(function(allhybrid_2010, current) {
    if(current['year'] === 2010 && current['hybrid']){
        allhybrid_2010.push(current)
    }
    return allhybrid_2010;
  }, []);
let nothybrid_2010 = mpg_data.reduce(function(nothybrid_2010, current) {
    if(current['year'] === 2010 && !current['hybrid']){
        nothybrid_2010.push(current)
    }
    return nothybrid_2010;
  }, []);

  let hybrid_2011 = mpg_data.reduce(function(allhybrid_2011, current) {
    if(current['year'] === 2011 && current['hybrid']){
        allhybrid_2011.push(current)
    }
    return allhybrid_2011;
  }, []);
let nothybrid_2011 = mpg_data.reduce(function(nothybrid_2011, current) {
    if(current['year'] === 2011 && !current['hybrid']){
        nothybrid_2011.push(current)
    }
    return nothybrid_2009;
  }, []);

  let hybrid_2012 = mpg_data.reduce(function(allhybrid_2012, current) {
    if(current['year'] === 2012 && current['hybrid']){
        allhybrid_2012.push(current)
    }
    return allhybrid_2012;
  }, []);
let nothybrid_2012 = mpg_data.reduce(function(nothybrid_2012, current) {
    if(current['year'] === 2012 && !current['hybrid']){
        nothybrid_2012.push(current)
    }
    return nothybrid_2012;
  }, []);


  const hybrid_non_hybrid = (hybrid_year, non_hybrid_year) => {
    return { 
      hybrid : city_highway_fac(hybrid_year),
      notHybrid: city_highway_fac(non_hybrid_year)
  };
  };

  const city_highway_fac = (data) => {
    let len  = data.length;
    let sum_city = data.reduce(function(sum, current) {
        return sum + current["city_mpg"];
    }, 0);
    let mean_mpg_city = sum_city/len;
    let sum_highway = data.reduce(function(sum, current) {
        return sum + current["highway_mpg"];
    }, 0);
    let mean_mpg_highway = sum_highway/len;
    return { 
      city : mean_mpg_city,
      highway: mean_mpg_highway
  };
  };


  export const moreStats = {
    makerHybrids: final,
    avgMpgByYearAndHybrid: {
        2009: hybrid_non_hybrid(hybrid_2009, nothybrid_2009),
        2010: hybrid_non_hybrid(hybrid_2010, nothybrid_2010),
        2011: hybrid_non_hybrid(hybrid_2011, nothybrid_2011),
        2012: hybrid_non_hybrid(hybrid_2012, nothybrid_2012)
    }
};
//console.log(moreStats["makerHybrids"])
//console.log(moreStats["avgMpgByYearAndHybrid"])