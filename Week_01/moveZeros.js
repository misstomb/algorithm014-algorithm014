/*
    LeetCode 移动零
    
*/

/*
    解法一：遇到为0的元素，先从数组中把它删除，然后在数组末端添加0
*/
const moveZeros1 = function(nums) {
    for (let i = nums.length - 1; i>=0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0)
        }
    }
    return nums
}

/*
    解法二：双指针，交换非零元素
*/
const moveZeros2 = function(nums) {
    let k = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !==0) {
            let temp = nums[i];
            nums[i] = nums[k];
            nums[k++] = temp;
        }
    }
    return nums
}