function getSubsets(arr){
    function dfs(depth){
        if(depth === arr.length){
            const subset = arr.filter((a,b)=> flag[b]);
            result.push(subset);
            return;
        }
        flag[depth] = true;
        dfs(depth+1);
        flag[depth] = false;
        dfs(depth+1);
    }
    let flag = Array(arr.length).fill(false);
    let result =[];
    dfs(0);
    return result;
}


const example = ["a","b","c"];
const result = getSubsets(example);
console.log(result);
const result2 = result.filter((key)=> key.length>0);
//console.log(result2);