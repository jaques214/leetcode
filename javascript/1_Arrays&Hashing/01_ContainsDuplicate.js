//const nums = [1,2,3,1]
//const nums = [1,2,3,4]
const nums = [1,1,1,3,3,4,3,2,4,2]

/**
 * Hash Set - Early Exit
 * Time O(N) | Space O(N)
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const numSet = new Set()
    let res = false

    nums.forEach((n) => {
        if (numSet.has(n)) {
            res = true
        }
        numSet.add(n)
    })

    return res
};

console.log(containsDuplicate(nums))