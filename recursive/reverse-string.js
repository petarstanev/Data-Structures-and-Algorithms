//yoyo mastery -> yretsam oyoy

function reverseIterative(word) {
    let reverseWord = "";
    for (let i = word.length - 1; 0 <= i; i--) {
        reverseWord = reverseWord + word[i];
    }
    return reverseWord;
}

console.log(reverseIterative("yoyo mastery"));

function reverseRecursive(word) {
    if (word.length === 1) {
        return word;
    }

    return word[word.length - 1] + reverseRecursive(word.slice(0, word.length - 1));
}

console.log(reverseRecursive("yoyo mastery"));
