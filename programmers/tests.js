function solution(n) {
    var answer = 0;
    let arr = n.toString(2).split("");
    arr.unshift('0');
    console.log(" " + arr);
    for(let i=arr.length-1;i>0;i--){

        if(arr[i-1]==='0' &&arr[i]==='1'){
            arr[i-1] =arr[i];
            arr[i]='0';
        }
    }
    arr = arr.join('');
    
    let 이진수 = "1111101";
    console.log(arr);
    console.log(이진수);
    console.log(`==== ${parseInt(arr, 2)}`);
    console.log(`==== ${parseInt(arr, 10)}`);
    console.log(`==== 2진수(${이진수}) -> 10진수(${parseInt(이진수, 2)})`); // 125
}
solution(15);