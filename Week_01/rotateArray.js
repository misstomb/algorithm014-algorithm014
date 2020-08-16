/*
    LeetCode 旋转数组
    https://leetcode-cn.com/problems/rotate-array/

    给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
    示例：
    输入: [1,2,3,4,5,6,7] 和 k = 3
    输出: [5,6,7,1,2,3,4]
    解释:
    向右旋转 1 步: [7,1,2,3,4,5,6]
    向右旋转 2 步: [6,7,1,2,3,4,5]
    向右旋转 3 步: [5,6,7,1,2,3,4]
*/

//解法一：使用数组splice 和 concat方法
const rotateArray = function(nums, k) {
    let right = nums.splice(nums.length - k, k);
    return right.concat(nums)
}

// 解法二：暴力解法，双层遍历
const rotateArray2 = function(nums, k) {
    let last, temp;
    for (let i = 0; i < k; i++) {
        last = nums[nums.length - 1];
        for (let j = 0; j < nums.length; j++){
            temp = nums[j]
            nums[j] = last
            last = temp
        }
    }
    return nums
}

// 解法三：使用新数组空间
const rotateArray3 = function(nums, k) {
    let newArr = [], len = nums.length;
    for (let i = 0; i < len; i++){
        newArr[(i + k) % len] = nums[i]
    }
    for (let j = 0; j < len; j++ ){
        nums[j] = newArr[j]
    }
    return nums
}

// 解法四： 
var rotateArray4 = function(nums, k) {
    const len = nums.length;
    let head = 0, current = 0, gap = k % len;
    if (!gap) {
        return nums;
    }
    for (let i = 0; i < len; i++) {
        current = (current + gap) % len;
        if (current === head) {
        current = ++head;
        }
        let key = nums[current];
        nums[current] = nums[head];
        nums[head] = key;
    }
    return nums;
};