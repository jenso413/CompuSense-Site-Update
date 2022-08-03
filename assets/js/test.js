var isPalindrome = function(s) {
    let replaced = s.replace(/[,]/gi, '')
    return replaced
};

console.log(isPalindrome("ll,l"))

