/*
    candies = [2, 3, 5, 1, 3]
            i [0][1][2][3][4]
    extraCandies = 3

    return result = []              (boolean array)
                  i [0][1][2][3][4]

    for i = 0, result[0] = ?

    candies[0] + extraCandies >= [3, 5, 1, 3]
                               i [1][2][3][4]
        2 + 3 >= 3 true
        2 + 3 >= 5 true
        2 + 3 >= 1 true
        2 + 3 >= 3 true

    result[0] = true

    for i = 1, result[1] = ?

    candies[1] + extraCandies >= [2, 5, 1, 3]
                               i [0][2][3][4]
        3 + 3 > 2
        3 + 3 > 5
        3 + 3 > 1
        3 + 3 > 3

    result[1] = true

    for i = 2, result[2] = ?

    candies[2] + extraCandies >= [2, 3, 1, 3]
                                 i [0][1][3][4]
          5 + 3 > 2
          5 + 3 > 3
          5 + 3 > 1
          5 + 3 > 3 

    result[2] = true

    for i = 3, result[3] = ?

    candies[3] + extraCandies >= [2, 3, 5, 3]
                                    i [0][1][2][4]
            1 + 3 > 2
            1 + 3 > 3
            1 + 3 > 5
            1 + 3 > 3           

    result[3] = false

    for i = 4, result[4] = ?

    candies[4] + extraCandies >= [2, 3, 5, 1]
                                    i [0][1][2][3]
            3 + 3 > 2
            3 + 3 > 3
            3 + 3 > 5
            3 + 3 > 1       
    
    result[4] = true

    return result = [true, true, true, false, true]
*/

// /**
//  * @param {number} totalCandies
//  * @param {number[]} candies
//  * @param {number} i
//  * @return {boolean}
//  */
// var isGreater = function(totalCandies, candies, i){
//     // make an assumption that the totalCandies >= all the other kids candies
//     let assumption = true;

//     // iterate or traverse the candies array index <- 0 to candies.length - 1
//     for(let index=0; index<candies.length; index++){
//         // except the index i
//         if(index != i){
//             // check if the assumption is wrong
//             if(totalCandies < candies[index]){
//                 // valdiate the assumption
//                 assumption = false;
//             }
//         }
//     }
    
//     // return the assumption
//     return assumption;
// }

// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
// var kidsWithCandies = function(candies, extraCandies) {
//     // initialize an empty boolean array <- result
//     let result = [];

//     // traverse or iterate the array candies i <- 0 to candies.length - 1
//     for(let i=0; i<candies.length; i++){
//         // find the totalCandies <- candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than all the other kids candies
//         if(isGreater(totalCandies, candies, i)){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else if false => push false to the result array
//             result.push(false);
//         }
//     }
//     // return the result array
//     return result;
// };

// /**
//  * @param {number} totalCandies
//  * @param {number[]} candies
//  * @param {number} i
//  * @return {boolean}
//  */
// // time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     // iterate or traverse the candies array index <- 0 to candies.length - 1
//     for(let index=0; index<candies.length; index++){
//         // check if the assumption is wrong
//         if(totalCandies < candies[index]){
//             // valdiate the assumption
//             return false;
//         }
//     }
//     // return the assumption
//     return true;
// }

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(isGreater(totalCandies, candies, i)){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// // time complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         let greatestCandy = Math.max(...candies);
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         result.push(candies[i] + extraCandies >= greatestCandy);
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     candies.forEach(candy => {
//         result.push(candy + extraCandies >= greatestCandy);
//     });
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     result = candies.map(candy => {
//         return candy + extraCandies >= greatestCandy;
//     });
//     return result;
// };


// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => {
//         return candy + extraCandies >= greatestCandy;
//     });;
// };


// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies >= greatestCandy);
// };

// time complexity: O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(candy => candy + extraCandies >= Math.max(...candies));
};

