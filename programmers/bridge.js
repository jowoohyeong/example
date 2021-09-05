function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = Array.from({length: bridge_length}, ()=>0);
    
    while(bridge.length>0){
        answer++;   
        bridge.shift();
        
        if(truck_weights.length>0){
            let sum = bridge.reduce((sum, curr) => sum + curr);
            if(sum + truck_weights[0] <= weight ){
                bridge.push(truck_weights.shift());
            }else{
                bridge.push(0);
            }
        }
            
        
    }
    console.log(answer);
    return answer;
}
solution(2,	10,	[7,4,5,6]);
solution(100, 100, [10]);//	101
solution(100, 100, [10,10,10,10,10,10,10,10,10,10]);//	110