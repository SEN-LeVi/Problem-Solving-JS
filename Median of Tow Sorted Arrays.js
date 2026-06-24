/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let A = nums1, B = nums2;
    if (A.length > B.length) {
        [A, B] = [B, A];
    }
    const m = A.length, n = B.length;
    const total = m + n;
    const half = Math.floor((total + 1) / 2);

    let left = 0, right = m;
    while (left <= right) {
        const i = Math.floor((left + right) / 2);
        const j = half - i;

        const Aleft  = i > 0 ? A[i - 1] : -Infinity;
        const Aright = i < m ? A[i]     :  Infinity;
        const Bleft  = j > 0 ? B[j - 1] : -Infinity;
        const Bright = j < n ? B[j]     :  Infinity;

        if (Aleft <= Bright && Bleft <= Aright) {
            if (total % 2 === 1) {
                return Math.max(Aleft, Bleft);
            }
            return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
        } else if (Aleft > Bright) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }
};
