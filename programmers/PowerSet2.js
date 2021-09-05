function PowerSet(array){
    function fork(depth, subset){
        if(array.length === depth){
            result.push(subset);
            return;
        }
        fork(depth+1, subset+array[depth]);
        fork(depth+1, subset);
    }
    var result =[];
    fork(0, []);
    result.pop();
    return result;
}
const example = ["a","b","c"];
const result = PowerSet(example);
console.log(result);
const result2 = result.filter((key)=> key.length>0);