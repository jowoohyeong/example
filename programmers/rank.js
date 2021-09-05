function solution(n, results){
    let answer = 0;
	const graph = Array.from({ length: n + 1 }, () => Array(n+1).fill(false));
	results.map((val) => {
		const [win, lose] = val;
		graph[win][win] = 0;
   		graph[win][lose] = 1;
		graph[lose][win] = -1;
		graph[lose][lose] = 0;
	});

	const range = [...Array(n).keys()].map((e) => e + 1);

	for (let mid of range)
		for (let a of range) 
			for (let b of range) {
				if (graph[a][mid]===1 && graph[mid][b]===1) graph[a][b] = 1;
				if (graph[a][mid]===-1 && graph[mid][b]===-1) graph[a][b] = -1;
			}
            console.log(graph);		
	
	for(const a of range) {
		let x = false;
		for (const b of range) {
			if (graph[a][b] === false) {
				x = true;
				break;
			}
		}
		answer += x ? 0 : 1;
	}

	return answer;
};
solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]])