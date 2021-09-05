function solution(numbers) {
    const stack = [];
    const prime = (num) => {
        const sqrt = Math.floor(Math.sqrt(num));
        for (let i = 2; i <= sqrt; i += 1) {
            if (num % i === 0){         //짝수는 소수가 될수없다.
                return false;
            }
        }
        return true;
    }
    
    const makeANum = (num, idx) => {
        if (num.length === numbers.length) return;   // num 문자열에 새로운 numbers[i]값을 합쳐야하는데 주어진 값보다 자리수가 넘어가면 안된다.
        for (let i = 0; i < numbers.length; i ++) {
            if (idx.indexOf(i) !== -1) continue;  //idx 숫자가 존재한다면 넘어감.
            const newNum = num + numbers[i];
            
            //소수확인
            if (!(stack.includes(parseInt(newNum))) && parseInt(newNum) >= 2) {
                
                const isPrime = prime(parseInt(newNum));
                if (isPrime)    stack.push(parseInt(newNum));
            }
            makeANum(newNum, [...idx, i]);
        }
    }
    makeANum('', []);
    console.log(stack);
    return stack.length;
}
console.log(solution("011"));
