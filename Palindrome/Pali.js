
function checkPalindrome(string) {

  
    const word = string.length;
    for (let i = 0; i < word / 2; i++) {

        if (string[i] !== string[word - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = "madam";

const value = checkPalindrome(string);

console.log(value);