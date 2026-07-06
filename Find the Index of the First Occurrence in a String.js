/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// Version 1 — built-in (accepted, one line)
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

// Version 2 — manual (what an interviewer wants to see)
var strStr = function(haystack, needle) {
    const n = haystack.length;
    const m = needle.length;

    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        while (j < m && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === m) {
            return i;
        }
    }

    return -1;
};
