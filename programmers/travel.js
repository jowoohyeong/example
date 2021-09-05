function solution(tickets) {
    let answer = []
    let check = new Array(tickets.length).fill(false);
    tickets.sort();
    dfs("ICN", ["ICN"]);
    function dfs(curr, path){
        if(!answer.length && path.length===(tickets.length+1)){
            answer = path;
            return;
        }
        for(let i=0;i<tickets.length;i++){
            if(check[i]) continue;
            if(curr===tickets[i][0]){
                check[i] = true;
                dfs(tickets[i][1], [...path, tickets[i][1]]);
                check[i] =false;       
            }
        }
    }
    
    return answer;   
}
//solution([["ICN", "AAA"], ["ICN", "AAA"], ["ICN", "AAA"], ["AAA", "ICN"], ["AAA", "ICN"]]);
//기댓값 〉	["ICN", "AAA", "ICN", "AAA", "ICN", "AAA"]


solution([["ICN", "BOO"], ["ICN", "COO"], ["COO", "DOO"], ["DOO", "COO"], ["BOO", "DOO"], ["DOO", "BOO"], ["BOO", "ICN"], ["COO", "BOO"]]);
//기댓값 〉	["ICN", "BOO", "DOO", "BOO", "ICN", "COO", "DOO", "COO", "BOO"]