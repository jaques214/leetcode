import random
from builtins import str
from typing import List


class Solution:
    strs = ["lint","code","love","you"]

    """
    @param: strs: a list of strings
    @return: encodes a list of strings to a single string.
    """
    def encode(self, strs: List[str]) -> str:
        res = ""
        for s in strs:
            res += str(len(s)) + "#" + s

        return res

    """
    @param: str: A string
    @return: decodes a single string to a list of strings
    """
    def decode(self, str: str) -> List[str]:
        res, i = [], 0

        while i < len(str):
            j = i
            while str[j] != "#":
                j += 1
            length = int(str[i:j])
            res.append(str[j + 1 : j + 1 + length])
            i = j + 1 + length

        return res

solution = Solution()
print(solution.strs)
str = solution.encode(solution.strs)
print(str)
print(solution.decode(str))