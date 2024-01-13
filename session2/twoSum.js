/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// // time complexity: O(N^2)
// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[i] + nums[j] == target){
//                 return [i, j];
//             }
//         }
//     }
// };

// // time complexity: O(N logN)
// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length; i++){
//         let diff = target - nums[i];
//         // check if the diff is in nums
//         let index = nums.indexOf(diff, i+1);
//         if(index!=-1){
//             return [i, index];
//         }
//     }
// };

// time complexity: O(N)
var twoSum = function(nums, target) {
    // prepare a 2d array with the indexes and the values
    let nums2d = nums.map((value, index) => [index, value]);

    // sort the 2d array
    nums2d.sort((a, b) => a[1]-b[1]);

    // deploy the two pointers
    let first = 0;
    let last = nums2d.length - 1;

    while(first < last){
        if(nums2d[first][1] + nums2d[last][1] == target){
            return [nums2d[first][0], nums2d[last][0]];
        } else if(nums2d[first][1] + nums2d[last][1] < target){
            first++;
        } else {
            last--;
        }
    }
};

/*
    Approach 1: Generating all the Pairs O(N^2)

    Approach 2: Hashing Technique O(N logN)

    Approach 3: Two pointers technique O(N)

*/