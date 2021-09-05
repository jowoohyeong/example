function solution(distance, rocks, n) {
    var answer = 0;
    rocks.push(0, distance);
    rocks.sort((a,b)=>a-b)

    let start = 0;
    let end = distance;

    while(start <= end){
        let mid = parseInt((start+end)/2);
        let count =0, now =0;
        
        for(let i=1;i<rocks.length;i++){
            if(rocks[i]-now < mid) count++;
            else now = rocks[i];
            
        }
        if(count > n) end = mid-1;
        else start=mid+1;
        
    }
    answer = end
    console.log(answer);
    //for(let i=1;i<lengArr.length;i++) rockdist.push(lengArr[i]-lengArr[i-1])
}
let a = solution(25,[2, 14, 11, 21, 17],2);