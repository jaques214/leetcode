from collections import defaultdict
from typing import List


class Solution:
    strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)

        print(res)

        for s in strs:
            count = [0] * 26  # binary array of 26 length

            for c in s:
                count[ord(c) - ord("a")] += 1

            res[tuple(count)].append(s)





        return res.values()


solution = Solution()
print(solution.groupAnagrams(solution.strs))
