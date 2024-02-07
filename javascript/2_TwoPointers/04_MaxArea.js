const height = [1,8,6,2,5,4,8,3,7]

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let firstLine = 0
    let lastLine = height.length - 1
    let max = 0
    while (firstLine < lastLine) {
        const minHeight = (height[firstLine] < height[lastLine]) ? height[firstLine] : height[lastLine]

        const area = (lastLine - firstLine) * minHeight

        if(area > max) max = area

        if(height[firstLine] < height[lastLine]) {
            firstLine++
        }
        else {
            lastLine--
        }

    }
    return max
};

console.log(maxArea(height))