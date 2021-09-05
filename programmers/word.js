function solution(begin, target, words) {
    var answer = 100;
    var check = Array.from({length:words.length}, ()=>false);
    dfs(begin, target, words, 0, check);
    
    return (answer === 100) ? 0 : answer;
    
    function dfs(begin, target, words, depth, check){

        if(begin==target && answer>depth ){
            answer = depth;
            console.log(answer);
            console.log(check);
            return;
        }
        for(let i=0; i<words.length; i++){
            if(!check[i] && diff(begin, words[i])){
                depth++;
                check[i] = true;
                dfs(words[i],target, words, depth, check);
                check[i] = false;
                depth--;
            }
        }
    }
    function diff(begin, words){
        let dff =0;
        for(let i=0;i<begin.length;i++){
            if(begin[i]!==words[i]) dff++;
        }
        if(dff===1) return true;
        return false;
    }
}

solution("hit", "cog", ["hot", "dot", "lot", "log", "dog", "cog",]);
//solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]);
