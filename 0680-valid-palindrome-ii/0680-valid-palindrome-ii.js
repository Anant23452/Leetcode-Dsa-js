/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;
    //helper function
    function isPalindrome(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }



    while (left < right) {
        if (s[left] !== s[right]) {
           if( isPalindrome(s, left + 1, right) ||
            isPalindrome(s, left, right - 1)){
                return true;
            }else{
                return false ;
            }


        }
        left++;
        right--;
    }

return true;;
}