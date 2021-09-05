const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
  };

const bfs2 = (graph, startNode) =>{
    let end =[];
    let need =[];

    need.push(startNode);

    while(need.length!==0){
        let node = need.shift();
        if(!end.includes(node)){
            end.push(node);
            need= [...need, ...graph[node]];    
        }
    }
    return end;
};
console.log(bfs2(graph, "A"));