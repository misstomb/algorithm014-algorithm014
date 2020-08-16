/*
    LeetCode 爬楼梯
    https://leetcode-cn.com/problems/climbing-stairs/

    假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
    每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
    注意：给定 n 是一个正整数。
    示例：
    输入： 3
    输出： 3
    解释： 有三种方法可以爬到楼顶。
    1.  1 阶 + 1 阶 + 1 阶
    2.  1 阶 + 2 阶
    3.  2 阶 + 1 阶
*/

/*
    解法一：递归
*/
const climbStairs1 = function(n) {
    let arr = [0, 1, 2];
    function loop(n) {
        if(arr[n]) return arr[n]
        arr[n] = loop(n - 1) + loop(n - 2)
        return arr[n]
    }
    return loop(n)
}

/*
    解法二：动态规划
*/
const climbStairs2 = function(n) {
    if (n <= 2) return n;
    let pre = 1, cur = 2, sum;
    for(let i = 3; i<=n; i++){
        sum = pre + cur;
        pre = cur
        cur = sum
    }
    return sum
}