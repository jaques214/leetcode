//const nums = [2,7,11,15]
//const target = 9

const nums = [3,2,4]
const target = 6

//const nums = [3,3]
//const target = 6

/**
 * Hash Map - 1 Pass
 * Time O(N) | Space O(N)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const numSet = new Map()

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num
        if (numSet.has(diff)) return [numSet.get(diff), i]
        numSet.set(num, i)
    }

    return [-1, -1]
};

console.log(twoSum(nums, target))