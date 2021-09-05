function solution(n, computers) {
    var answer = 0;
    let stack = computers;
    stack.fill(false);
    console.log(stack);
    console.log(computers);
}
//solution(3,[[1, 1, 0], [1, 1, 0], [0, 0, 1]]); //2
solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]);//	1
