const s = "A man, a plan, a canal: Panama"
//const s = "race a car"
//const s = " "

/**
 * @param {string} s
 * @return {boolean}
 */
/*const isPalindrome = (s) => {
    s = s.toLowerCase()

    const re = /[^a-z0-9]/gi;

    const res = s.replaceAll(re, '')
    console.log(res)

    let reverse = []

    for (let i = res.length - 1; i >= 0; i--) {
        reverse.push(res[i])
    }

    console.log(reverse.join(""))

    return res === reverse.join("")
};*/


const isPalindrome = (s) => {
    let leftPointer = 0
    let rightPointer = s.length - 1
    let skipLeft, skipRight = false

    while(leftPointer < rightPointer) {
        if(!(s.charAt(leftPointer).toLowerCase() >= 'a' && s.charAt(leftPointer).toLowerCase() <= 'z') || !(s.charAt(leftPointer).toLowerCase() >= '0' && s.charAt(leftPointer).toLowerCase() <= '9') ) {
            skipLeft = true
        }
        if (skipLeft) leftPointer++

        if(!(s.charAt(rightPointer).toLowerCase() >= 'a' && s.charAt(rightPointer).toLowerCase() <= 'z') || !(s.charAt(rightPointer).toLowerCase() >= '0' && s.charAt(rightPointer).toLowerCase() <= '9') ) {
            skipRight = true
        }
        if (skipRight) rightPointer--

        if(s.charAt(leftPointer).toLowerCase() !== s.charAt(rightPointer).toLowerCase()) return false

        leftPointer++
        rightPointer--
    }

    return true
}

console.log(s)
console.log(isPalindrome(s))
