/*
    LeetCode 丑数
    https://leetcode-cn.com/problems/chou-shu-lcof/

    我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。
    
    示例：
    输入: n = 10
    输出: 12
    解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
*/

var nthUglyNumber = function(n) {
    let res = new Array(n)
    res[0] = 1
    let p2 = 0, p3 = 0, p5 = 0
    for(let i=1; i<n; i++){
        res[i] = Math.min(res[p2] * 2, res[p3] * 3, res[p5] * 5)
        if(res[i] === res[p2] * 2){
            ++p2
        }
        if(res[i] === res[p3] * 3){
            ++p3
        }
        if(res[i] === res[p5] * 5){
            ++p5
        }
    }
    return res[n-1]
};
