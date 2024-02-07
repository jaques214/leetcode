strs = ["eat","tea","tan","ate","nat","bat"]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    if (!strs.length) return []
    const map = new Map()

    for (const s of strs) {
        const frequency = new Array(26).fill(0);

        for (const char of s) {
            const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
            frequency[charCode]++;
        }

        const hash = frequency.toString();
        const values = map.get(hash) || [];

        values.push(s);
        map.set(hash, values);
    }

    return [ ...map.values() ];
};

console.log(groupAnagrams(strs))