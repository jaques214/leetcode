from typing import List


class Solution:
    nums = [100, 4, 200, 1, 3, 2]
    #nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
    #nums = []

    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums)
        longest = 0

        for n in nums:
            if (n - 1) not in numSet:
                length = 0
                while (n + length) in numSet:
                    length += 1
                longest = max(length, longest)

        return longest


solution = Solution()
print(solution.longestConsecutive(solution.nums))
