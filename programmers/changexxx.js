function solution(p) {
    var result = p.match(/(\(|\))/g);
    p = "red re red";
    var result = p.match(/red/g);
    console.log(result)
}
let answer = solution("))))(((()(");