function sentenceReverse(sentence)
{
    return sentence.split(' ').reverse().join(' ');
}

let sentence = "Malik Fouzan Khan";
console.log(`The reverse sentence of '${sentence}' is: ${sentenceReverse(sentence)}`);