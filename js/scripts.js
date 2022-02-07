function pigLatin(text) {
  vowels = ["a","i","e","o","u"];
  for (let i= 0; i < vowels.length; i += 1) {
    if (vowels[i] === text.toLowerCase()[0]) {
  return true;
};
console.log(text.toLowerCase()[0]);
  }
return false;
}



function pigLatinVowels(text) {
  vowels = ["a","i","e","o","u"];
  for (let i= 0; i < vowels.length; i += 1) {
    if (vowels[i] === text.toLowerCase()[0]) {
      finalWord = text.toLowerCase().concat("way");
      return finalWord;
};
console.log(text.toLowerCase()[0]);
  }
return false;
}

function pigLatinQ(text) {
  if ("q" === text.toLowerCase()[0]) {
    firstLetter= text.slice(0,2).concat([0,2]);
    finalWord = firstLetter.toLowerCase().concat("ay");
    return finalWord;
};
console.log(text.toLowerCase()[0]);

return false;
}


(text - first letter) first letter + "ay"

"quick" becomes "ickquay"

If the first consonants include "qu", move the "q" and the "u." Don't forget about words like "squeal" where "qu" doesn't come first! Examples: "quick" becomes "ickquay" while "squeal" becomes "quealsay."
