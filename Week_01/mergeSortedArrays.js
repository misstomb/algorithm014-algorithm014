/*
    LeetCode 合并两个有序数组
    https://leetcode-cn.com/problems/merge-sorted-array/

    给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
    初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
    你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 
    示例：
    输入:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3
    输出: [1,2,2,3,5,6]
*/

// 合并+重新排序
const mergeSortedArray = function(nums1, m, nums2, n) {
    for(var i=0; i<n; i++){
        nums1[m+i] = nums2[i]
    }
    nums1.sort((a,b) => a-b)
};

//解法二：
// const mergeSortedArray2 = function(nums1, m, nums2, n) {
//     let p1 = m - 1, p2 = n - 1, len = m + n - 1;
//     while (p1 >= 0 && p2 >= 0) {
//         nums[len--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--]
//     }
// };