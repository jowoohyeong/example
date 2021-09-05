function solution(p) {
    let u, v;
    let cnt=0;
    if(p.length===0) return p;
    
    for(let i=0;i<p.length;i++){
        p[i]==="(" ? cnt++ : cnt--;
        if(cnt===0){
            u = p.substr(0, i+1);
            v = p.substr(i+1);
            break;
        }
    }
    for(let i=0;i<u.length;i++){
        u[i]==="(" ? cnt++ : cnt--;
        if(cnt < 0){
            let str ="";
            str += `(${solution(v)})`;
            for(let j=1;j<u.length-1;j++){
                u[j]==="(" ? str+=")" : str+="(";
            }
            return str;
        }
    }
    return u + solution(v);
}
let answer = solution(")(");"(()())()"
console.log(answer);
answer = solution("()))((()");
console.log(answer);
answer = solution("(()())()");
console.log(answer);