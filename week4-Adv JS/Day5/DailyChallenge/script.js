// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.

function areAnagrams(str1,str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    const letters = {};
    for (let i=0; i<str1.length; i++) {
        if (str1[i] === ' ') continue;
        if (letters[str1[i]] === undefined)
            letters[str1[i]] = 1;
        else
            letters[str1[i]]++;
    }
 
    for (let i=0; i<str2.length; i++) {
        if (str2[i] === ' ') continue;
        if (letters[str2[i]]  === undefined || letters[str2[i]] <= 0)
            return false;
        else
            letters[str2[i]]--;
    }

    for (let letter in letters) {
        if (letters[letter] > 0)
            return false;
    }

    return true;
}

// I thought of a second solution also:

function areAnagrams2(str1,str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    letters1 = str1.split(' ').join('').split('');
    letters2 = str2.split(' ').join('').split('');

    if (letters1.length !== letters2.length)
        return false;

    letters1.sort();
    letters2.sort();

    for (let i=0; i<letters1.length; i++) {
        if (letters1[i] !== letters2[i])
            return false;
    }

    return true;
}

// I dont know how many time does this split and join and split again takes but could also be replaced by a single loop
// and I think that for really long strings the first solution may be better because it is limited to an object
// with keys from a to z and this arrays in the second solution are two and can grow forever...