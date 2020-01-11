function sortAlphabet(str) {
    if (!str) {
        return;
    }
    str = str.split('');
    str = str.sort();
    str = str.join('');
    return str;
}

const words = ["cat", "listen", "code", "act", "silent", "tac"];

function findSame(words){
    const anagrams = {}; 
    words.forEach((word)=>{
        const sortedWord = sortAlphabet(word);
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
    });
    return anagrams;1

}

const group = findSame(words);
for(const sortedWord in group){
    console.log(group[sortedWord].toString());
}


