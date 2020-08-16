/*
    LeetCode 两数之和
    https://leetcode-cn.com/problems/two-sum/

    给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
    
    示例：
    给定 nums = [2, 7, 11, 15], target = 9
    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
*/

// 有序数组解法
const twoSum1 = function(nums, target) {
    let i = 0, j = nums.length - 1;
    while(i < j) {
        if (nums[i] + nums[j] === target) {
            return [i, j]
        }else if(nums[i] + nums[j] > target){
            j--
        }else{
            i++
        }
    }
    return []
};

// 一般数组解法, harsh
const twoSum2 = function(nums, target) {
    let obj = {}
    for(let i=0; i<nums.length; i++){
        let res = target - nums[i];
        if(res in obj) {
            return [obj[res], i]
        }
        obj[nums[i]] = i
    }
};