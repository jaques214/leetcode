class Solution(object):
    nums = [1,2,3,1]

    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        hashset = set()
        for n in nums:
            if n in hashset:
                return True
            hashset.add(n)

        return False



solution = Solution()
print(solution.containsDuplicate(solution.nums))