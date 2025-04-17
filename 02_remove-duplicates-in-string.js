/* Remove Adjacent Duplicates in String. You are given a string s and an integer k. Write a function to remove k adjacent duplicates from s where the "adjacent" characters are equal.

For instance, if k is 3 and the string is "daaabbbaa", since we have "aaa" and "bbb" as adjacent triples, the function should transform the string to "daa", removing the "bbb" first and then the remaining "aaa" */

/* Time Complexity */
/*
    N - length of the input string
    K - group size for duplicate removal
    G - number of collapsible groups removed

    - The main loop runs while i < copy.length, and may restart from i = 0 after each group removal.
    - Each call to isCharsSame() takes O(K) time, which is constant if K is small.
    - When a group is removed, a new string is created using:
        copy.slice(0, start) + copy.slice(end), which is O(N) per removal.
    - If G groups are removed one at a time, each causing a full scan restart,
      and each removal requires O(N) slicing, the total complexity becomes:

        Worst-case: O(G × N) → up to O(N²) when many small groups are removed.

    - Best-case: O(N) when:
        • no groups are found (just one pass),
        • or few large collapses occur without frequent loop resets.

    Overall:
        Time Complexity: O(N × G) → worst-case O(N²)
        Space Complexity: O(N) due to string copying and reconstruction
*/

const isCharsSame = (string) => {
    for (let i = 0; i < string.length - 1; i++) {
        if (string[i] !== string[i + 1]) {
            return false;
        }
    }

    return true;
};

const removeDuplicatesInString = (string, k) => {
    let copy = string;
    let i = 0;
    while (i < copy.length) {
        const start = i;
        const end = i + k;
        const subString = copy.slice(start, end);

        if (subString.length >= k && isCharsSame(subString)) {
            copy = copy.slice(0, start) + copy.slice(end);

            i = 0;
        } else {
            i++;
        }
    }

    return copy;
};

console.log(removeDuplicatesInString("pbbcggttciiippooaais", 2));
console.log(removeDuplicatesInString("deeedbbcccbdaa", 3));
console.log(removeDuplicatesInString("aaabbbacd", 3));
console.log(removeDuplicatesInString("aabbbacd", 2));
