from typing import List


class Solution:
    nums = [3,0,1,0]
    k = 1

    def merge_sort(self, arr: []):
        if len(arr) > 1:
            mid = len(arr) // 2  # // to return int instead of float

            left = arr[:mid]
            right = arr[mid:]

            # Sorting the first half
            self.merge_sort(left)

            # Sorting the second half
            self.merge_sort(right)

            i = j = k = 0

            while i < len(left) and j < len(right):
                if left[i] < right[j]:
                    arr[k] = left[i]
                    i += 1
                else:
                    arr[k] = right[j]
                    j += 1
                k += 1

            # Checking if any element was left
            while i < len(left):
                arr[k] = left[i]
                i += 1
                k += 1

            while j < len(right):
                arr[k] = right[j]
                j += 1
                k += 1

        return arr

    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        #freq = [[] for i in range(len(nums) + 1)]

        freq = []

        for i in range(len(nums) + 1):
            freq.append([])

        for n in nums:
            count[n] = 1 + count.get(n, 0)

        print(count)

        for n, c in count.items():
            freq[c].append(n)

        print(freq)

        res = []
        for i in range(len(freq) - 1, 0, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res

solution = Solution()
print(solution.topKFrequent(solution.nums, solution.k))
