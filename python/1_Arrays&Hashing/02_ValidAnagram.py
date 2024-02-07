import re


class Solution:
    s = "anagram"
    t = "nagaram"

    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        countS, countT = {}, {}

        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)

        print(countS)
        print(countT)

        for key in countS:
            if countS[key] != countT.get(key, 0):
                return False

        return True


solution = Solution()
print(solution.isAnagram(solution.s, solution.t))
