
function solution(jobs) {
    let answer = 0;
    let i=0,time=0;
    let qu =[];
    jobs.sort((a,b) => a[0]-b[0])
    while(i<jobs.length || qu.length!==0){
        if(i<jobs.length && jobs[i][0]<=time){
            qu.push(jobs[i++]);
            qu.sort((a,b)=> a[1]-b[1])
            continue;
        }
        if(qu.length===0){
            time = jobs[0][0];
        }else{
            const [start, finish] = qu.shift();
            answer += time+ finish-start;
            time += finish
        }
    }
    return parseInt(answer/jobs.length);
}
solution([[0, 3], [1, 9], [2, 6]]);