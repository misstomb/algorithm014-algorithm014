/*
    LeetCode 盛最多水的容器
    https://leetcode-cn.com/problems/container-with-most-water/

    给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
    说明：你不能倾斜容器，且 n 的值至少为 2
    示例：
    输入：[1,8,6,2,5,4,8,3,7]
    输出：49
*/

/*
    解法一：暴力解法，嵌套循环计算比较每一种面积，返回最大值
*/
const maxArea1 = function(nums) {
    const len = nums.length;
    let max = 0;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            let area = (j - i) * Math.min(nums[i], nums[j]);
            max = Math.max(area, max);
        }
    }
    return max
}

/*
    解法二：双指针
*/
const maxArea2 = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let max = 0;
    while (left < right) {
        let area = (right - left) * Math.min(nums[left], nums[right]);
        max = Math.max(area, max);
        nums[left] < nums[right] ? left++ : right--
    }
    return max
}