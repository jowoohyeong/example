function solution(orders, course) {
    var answer = [];
    let subsets = [];
    let menu = {}

    for(let i=0;i<orders.length;i++){
        subsets = PowerSet(orders[i]);
        for(let value of subsets){
            menu[value] = (menu[value] || 0) +1;
        }   
    }
    console.log(menu)
    return answer;
}
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
solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4])