function vowels(str)
{
    let vowels = 'aeiou', numOfVowels = 0;
    for(let i = 0;i < str.length;i++)
    {
        if(vowels.includes(str[i]))
        {
            numOfVowels++;
        }
    }
    return numOfVowels;
}

let str = "Code For India Foundation";
let numberOfVowels = vowels(str.toLowerCase());
console.log(`The number of vowels in ${str} is/are: ${numberOfVowels}\nThe number of consonants in ${str} is/are: ${str.length - numberOfVowels}`);