from typing import List


class Solution:
    #nums = [1,2,3,4]
    nums = [-1, 1, 0, -3, 3]

    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefix = 1
        postfix = 1
        answer = []

        for i in range(len(nums)):
            answer.append(prefix)
            prefix *= nums[i]

        for j in range(len(answer) - 1, -1, -1):
            answer[j] *= postfix
            postfix *= nums[j]

        return answer

solution = Solution()
print(solution.productExceptSelf(solution.nums))