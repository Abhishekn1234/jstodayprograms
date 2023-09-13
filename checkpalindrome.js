function checkPalindrome(string) {

    
    const len = string.length;

    
    for (let i = 0; i <=len ; i++) {

       
        if (string[i] == string[len - 1 - i]) {
            return 'true';
        }
    }

    return 'false';
}


const string = ('Enter a string: ');


const NaN = checkPalindrome(string);

console.log(NaN);