/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let number =0;
    let result =0;
    let sign =1;
    let stack =[]
    
    for(let i =0;i<s.length;i++){
        if (s[i] >= '0' && s[i] <= '9'){
            number = number*10+(s[i]-'0')

        }else if(s[i]==='+'){
            result +=(number*sign);
            number=0;
            sign =1;

        }else if(s[i]==='-'){
             result +=(number*sign);
            number=0;
            sign =-1;

        }else if(s[i]==='('){
            stack.push(result);
            stack.push(sign);
            result=0;
            number=0;
            sign =1;

        }else if(s[i]===')'){
            result+=number*sign;
            number =0;
            let stack_sign = stack.pop();
            
            let stack_result =  stack.pop();
           
            result= stack_result+stack_sign*result

        }
    }
    result+= (number*sign);
    return result;
};