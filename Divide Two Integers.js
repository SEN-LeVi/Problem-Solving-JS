/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const INT_MAX = 2147483647;   //  2^31 - 1
    const INT_MIN = -2147483648;  // -2^31

    // The one overflow case: -2^31 / -1 = 2^31, which is out of range.
    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    // Work in negatives to avoid overflowing when we flip -2^31 to positive.
    const negative = (dividend < 0) !== (divisor < 0);

    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let result = 0;

    while (a >= b) {
        let temp = b;
        let multiple = 1;

        // Double temp until doubling once more would overshoot a.
        while (a >= (temp << 1) && (temp << 1) > 0) {
            temp <<= 1;
            multiple <<= 1;
        }

        a -= temp;
        result += multiple;
    }

    return negative ? -result : result;
};