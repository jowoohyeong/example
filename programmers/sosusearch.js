function solution(numbers) {
    const stack = [];
    
    const search = (num) => {
        const sqrt = parseInt(Math.sqrt(num));
        for(let i=2;i<=sqrt; i+=1){
            if(num % i===0) return false;
        }
        return true;
    }
    const value = (num, idx) =>{
        if(num.length===numbers.length) return;             //ee
        for(let i=0;i<numbers.length;i++){
            if(idx.indexOf(i)!== -1) continue;
            
            let wNum = num + numbers[i];
            let intNum = parseInt(wNum);
            
            if(intNum >= 2 && !(stack.includes(intNum))){
                let TF = search(intNum);
                if(TF)    stack.push(intNum);
            }
            value(wNum, [...idx, i]);
        }
    }
    value("", []);
    console.log(stack);
    return stack.length;
}

console.log(solution("011"));