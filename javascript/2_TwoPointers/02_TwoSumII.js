//const numbers = [2,7,11,15]
//const target = 9

const numbers = [2,3,4]
const target = 6

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
    let left = 0
    let right = numbers.length - 1

    while (left < right) {
        const curSum = numbers[left] + numbers[right]
        if (curSum > target)
            right--;
        else if (curSum < target)
            left++;
        else
            return [left+1, right+1]
    }

    return []
};

console.log(twoSum(numbers, target))