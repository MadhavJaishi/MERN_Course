let str = "Hey JS! You are awesome";
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowel(data) {
    let count  = 0;

    data.toLowerCase().split("").forEach(ch => {
        vowels.includes(ch) && count++;
    });
    return count;
}

console.log(countVowel(str));