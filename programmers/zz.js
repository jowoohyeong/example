function solution(priorities, location) {
    var answer = 0;
    while(priorities.length>0){
        var b = priorities.shift();
        if(b < priorities[a]){
            priorities.push(b);
            if(location==0) location = priorities.length;
            else location--;
        }
        else {
            if(location==-1) return answer;
            else {
                answer++
                location--;
            }
        }
        a++;
    }
    return answer+1;
}
console.log(solution([2,1,3,2],2));
console.log(solution([1,1,9,1,1,1],0));