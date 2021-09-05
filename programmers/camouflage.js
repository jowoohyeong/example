function solution(clothes) {
    var answer = 1;
    var c={}
    for(let i in clothes){
        c[clothes[i][1]] = (c[clothes[i][1]] || 1)+ 1;      //옷이 있으나 입지 않은 경우를 포함하기 위해 기본값을 1
    }
    for (let i in c){
        answer *= c[i];
    }
    
    return answer-1;
}