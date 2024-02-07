const nums = [-1,0,1,2,-1,-4]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    const res = []

    nums.sort((a, b) => a-b)

    const target = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const threeSum = nums[i] + nums[left] + nums[right]
            if (threeSum > target)
                right--;
            else if (threeSum < target)
                left++;
            else {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (nums[left] === nums[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }

    return res
};

console.log(threeSum(nums))