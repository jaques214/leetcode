from typing import List

class Solution:
    #nums = [2, 7, 11, 15]
    #target = 9

    #nums = [3, 2, 4]
    #target = 6

    # nums = [3, 3]
    # target = 6

    # nums = [0, 4, 3, 0]
    # target = 0

    #nums = [-1,-2,-3,-4,-5]
    #target = -8

    nums = [2, 5, 5, 11]
    target = 10

    # nums = [-3,4,3,90]
    # target = 0

    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashSet = {}

        if 2 > len(nums) > 10**4:
            return []

        for i, n in enumerate(nums):
            diff = target - n
            if diff in hashSet:
                return [hashSet[diff], i]
            hashSet[n] = i

        print(hashSet)

        return

solution = Solution()
print(solution.twoSum(solution.nums, solution.target))