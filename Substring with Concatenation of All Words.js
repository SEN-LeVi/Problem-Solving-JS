/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const result = [];
    const wordLen = words[0].length;
    const numWords = words.length;
    const totalLen = wordLen * numWords;

    if (s.length < totalLen) return result;

    // Frequency map of the target words.
    const need = new Map();
    for (const w of words) {
        need.set(w, (need.get(w) || 0) + 1);
    }

    // Try every possible start position.
    for (let i = 0; i + totalLen <= s.length; i++) {
        const seen = new Map();
        let j = 0;

        while (j < numWords) {
            const start = i + j * wordLen;
            const word = s.substring(start, start + wordLen);

            if (!need.has(word)) break;             // word not in target at all

            seen.set(word, (seen.get(word) || 0) + 1);
            if (seen.get(word) > need.get(word)) break; // too many of this word

            j++;
        }

        if (j === numWords) result.push(i);
    }

    return result;
};
