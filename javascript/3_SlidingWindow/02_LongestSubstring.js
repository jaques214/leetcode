const s = "abcabcbb"

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    const count = new Map()
    const result = []
    const maxResult = ""

    for (let i = 0; i < s.length; i++) {
        if(count.has(s[i])) {
            count.set(s[i], count.get(s[i]) + 1)
        }
        else {
            count.set(s[i], 1)
        }
    }

    console.log(count)

    return result.length
};

console.log(lengthOfLongestSubstring(s))