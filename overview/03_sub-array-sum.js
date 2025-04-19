/* 
Determine if a given array contains a subarray of at least two elements whose sum is a multiple of a specified number k.

An array is considered to have a "good subarray" if there exists at least one subarray (consisting of two or more elements) such that the sum of the elements in this subarray is a multiple of k.

For example, the array [23, 2, 4, 7] with k = 6 has a "good subarray" ([2, 4]), as the sum 6 is a multiple of k = 6. The array [5, 0, 0, 0] with k = 3 does not have any "good subarray", as no subarray of two or more elements sums to a multiple of 3.

nums = [23, 2, 4, 7], k = 6
output: true

nums = [5, 0, 0, 0], k = 3
output: false

nums = [1,2,4,3,13], k = 4
output: true

nums = null, k = 1
output: false
*/

const hasGoodSubarray = (nums, target) => {
    if (!nums) return false;
    const seen = new Map([[0, -1]]);
    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        let remainder = prefixSum % target;
        if (remainder < 0) remainder += target;

        if (seen.has(remainder)) {
            if (i - seen.get(remainder) >= 2) return true;
        } else {
            seen.set(remainder, i);
        }
    }

    return false;
};

console.log(hasGoodSubarray([23, 2, 4, 6, 7], 6)); // true
console.log(hasGoodSubarray([6, 0, 0], 6)); // true
console.log(hasGoodSubarray([1, 2, 3], 7)); // false
console.log(hasGoodSubarray([5, 0, 0, 0], 3)); // true
console.log(hasGoodSubarray([-1, 6, 1], 5)); // true
console.log(hasGoodSubarray([0], 1)); // false
console.log(hasGoodSubarray([1, 2, 3, 4, 5], 12)); // true
console.log(hasGoodSubarray([6], 6)); // false
