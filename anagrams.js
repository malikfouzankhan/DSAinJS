function checkAnagram(str1, str2)
{
    if(str1.length != str2.length)
    {
        return `not an anagram`;
    }
    let count = 0;
    for(x of str1)
    {
        if(str2.includes(x))
        {
            count++;
        }
    }
    return count == str1.length ? `an anagram` : `not an anagram`;
}

let str1 = "listen", str2 = "silenc";
console.log(`${str1} and ${str2} are ${checkAnagram(str1.toLowerCase(), str2.toLowerCase())}`);