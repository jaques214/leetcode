const height = [0,1,0,2,1,0,1,3,2,1,2,1]

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
    if (height.length === 0) return 0;

    let left = 0
    let right = height.length - 1
    let maxLeft = height[left]
    let maxRight = height[right]
    let waterUnits = 0

    while (left < right) {
        if(maxLeft < maxRight) {
            left++;
            maxLeft = (maxLeft > height[left]) ? maxLeft : height[left]
            waterUnits += maxLeft - height[left];
        }
        else {
            right--;
            maxRight = (maxRight > height[right]) ? maxRight : height[right]
            waterUnits += maxRight - height[right];
        }
    }

    return waterUnits
};

console.log(trap(height))