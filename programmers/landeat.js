function solution(land) {
    var answer = [];
    for(let i=0;i<4;i++){
        dfs(land[0][i], i, 1);
    }
    function dfs(sum, row, cnt){
        if(land.length === cnt){
            return answer.push(sum);
        }
        
        for(let i=0;i<4;i++){
            if(i!== row){
                sum+= land[cnt][i];
                dfs(sum, i, cnt++);
            }
        }
    }
    console.log(answer);
    return answer;
}
solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]);