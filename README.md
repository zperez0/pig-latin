Describe: pigLatin()

Test: "identify first letter of a word"
Code:
const text = "apple";
pigLatin(text);
Expected Output: "a"

Test: "check if first letter of a word begins with 'a'."
Code:
const text = "apple";
pigLatin(text);
Expected Output: "true"

Test "check if first letter of a word begins with 'a' or 'i'."
Code:
const text = "ice";
const text = "apple";
pigLatin(text);
Expected Output: "true" (for both)

Test "check if first letter of a word begins with 'a','i','e','o','u'."
Code:
const text = "ice";
const text = "apple";
pigLatin(text);
Expected Output: "true" (for both)

Test "check if first letter of a word begins with 'a','i','e','o','u', regardless of case"
Code:
const text = "Apple";
const text = "apple";
pigLatin(text);
Expected Output: "true" (for both)

Test "check if we can add "way" to the end of any word"
Code:
const text = "Apple";
pigLatin(text);
Expected Output: "appleway"
