/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const memo = new Map();
    const dp = function(i, j) {
        const key = i + ',' + j;
        if (memo.has(key)) return memo.get(key);
        let ans;
        if (j === p.length) {
            ans = i === s.length;
        } else {
            const firstMatch = i < s.length && (p[j] === s[i] || p[j] === '.');
            if (j + 1 < p.length && p[j + 1] === '*') {
                ans = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
            } else {
                ans = firstMatch && dp(i + 1, j + 1);
            }
        }
        memo.set(key, ans);
        return ans;
    };
    return dp(0, 0);
};