var array = [2, 9, 9,4,3,5,2]; 
console.log(array.indexOf(2) );
console.log(array.indexOf(7) );
console.log(array.indexOf(9,1) );
console.log(array.indexOf(2, 2));
console.log(array.indexOf(2,0) );
// ok
// 첫번째 인자 = 찾을 요소
// 두번째 인자 어디서 부터 찾는가
// 두번째 인자에 찾는 요소가 있다면
// 0출력
// 두번째 인자 이후에 있다면
// 있는 자리 인덱스 출력
//없다면 -1