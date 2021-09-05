function solution(n, edge) {
    function bfs(start, arr, end){
        const visited = new Array(end + 1).fill(false);
        const level = new Array(end + 1).fill(0);
        const queue = [start];
        visited[start] = true
        while (queue.length){
            const head = queue.shift();
            const lev = level[head] + 1
            for (let node of arr) {
                console.log("zz "+ node);
                if (node[0] === head && !visited[node[1]]) {
                    queue.push(node[1]);
                    visited[node[1]] = true;
                    level[node[1]] = lev;
                    console.log("1- " +level);
                    console.log("1- " +visited);
                } else if (node[1] === head && !visited[node[0]]) {
                    queue.push(node[0]);
                    visited[node[0]] = true;
                    level[node[0]] = lev;
                    console.log("2- " +level);
                    console.log("2- " +visited);
                }
            }
    
        }
        const maxLevel = Math.max(...level);
        return level.filter((i) => i === maxLevel).length;
    }
    return bfs(1, edge, n);
    
}

let a = solution(5, [[3, 6], [4, 3], [1, 3], [1, 2], [2, 4], [5, 2]] );
