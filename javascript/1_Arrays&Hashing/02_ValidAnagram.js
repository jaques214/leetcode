//const s = "anagram"
//const t = "nagaram"

//const s = "rat"
//const t = "car"

const s = "a"
const t = "ab"

/**
 * Hash Map - Frequency Counter
 * Time O(N) | Space O(1)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    const firstMap = new Map()
    const secondMap = new Map()

    if (s.length !== t.length) {
        return false
    }

    for (const f of s) {
        (firstMap.has(f)) ? firstMap.set(f, firstMap.get(f) + 1) : firstMap.set(f, 1)
    }

    for (const s of t) {
        (secondMap.has(s)) ? secondMap.set(s, secondMap.get(s) + 1) : secondMap.set(s, 1)
    }

    for (const key of firstMap.keys()) {
        if (firstMap.get(key) !== secondMap.get(key)) {
            return false
        }
    }

    return true
};

console.log(isAnagram(s, t))