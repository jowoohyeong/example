function solution(arr) {
    var answer = '';
    let sum =0;
    let sumarr=Array.from({length:arr.length}, ()=> Array(0));
    
    for(let i=0;i<arr.length;i++){
        let check = false;
        let min = Math.min(...arr[i]);
        let max = Math.max(...arr[i]);
        
        for(let j=0; j<arr.length; j++){
            console.log(i, j);
            let a  = arr[i][j];
            if(i!==j){
                if(min === a || max === a)  check =true;
                else sumarr[i].push(arr[i][j]);
            } 
        }
        if(check)   sumarr[i].push(arr[i][i]);
    }
    console.log(sumarr);
   
    return answer;
}
solution([[1,2,4],[1,4,3],[1,4,6]]);
