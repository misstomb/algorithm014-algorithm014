/*
    LeetCode 有效的字母异位词
    https://leetcode-cn.com/problems/valid-anagram/description/

    给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
    
    示例：
    输入: s = "anagram", t = "nagaram"
    输出: true
*/

const isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let obj = {}
    for(let val of s){
        obj[val] = obj[val] + 1 || 0
    }
    for(let val of t){
        if(obj[val] === undefined || obj[val] < 0){
            return false
        }
        obj[val]--
    }
    return true
};
