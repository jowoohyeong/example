
const arr1 = [3, 30, 39, 29, 10, 13];
const arr2 = [3, 9, 29, 30, 11, 13];

var array3= [];
const test40 = (value) => value < 40;
const test10 = (value) => value >=10;
const testx = x => x*2;

console.log(arr1.every(test40)); // 조건검색
console.log(arr2.filter(test10)); //조건에 맞게 거르기
console.log();
console.log(arr1.find(test10));    //첫번째 요소의 값
console.log(arr1.findIndex(test10)); //첫번째 요소의 인덱스
console.log();

console.log();
console.log(arr1.flatMap( (n) =>(n < 0) ? [] : (n % 2 == 0) ? [n] : [n-1]));
 
arr2.forEach((key)=> array3.push(key));
console.log(array3);

console.log(arr2.indexOf(11));
console.log(arr1.join(' '));  //string 형식으로 출력