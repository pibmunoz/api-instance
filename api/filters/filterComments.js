/**
 * 
 * @param {Array} data, n
 * @returns {Array} sorted array of n most frequent words
 */
export default function filterComments(data, n) {
    const comments = data.flatMap(obj => obj.body.split(' '));
    const frequency = {};

    for (let i = 0; i < comments.length; i++) {
        const word = comments[i];

        if (frequency[word]) {
            frequency[word]++;
        } else {
            frequency[word] = 1;
        }
    }

    const sorted = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, n).map(entry => entry[0]);
}
