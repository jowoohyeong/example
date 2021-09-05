//멱집합!
const getSubsets = function (arr) {
    let flag = new Array(arr.length).fill(false);
    const subSets = [];
  
    const subSet = function (depth) {
      if (depth === arr.length) {
        const subSet = arr.filter((value, index) => flag[index]); // 해당 flag true => 부분집합 포함
        subSets.push(subSet);         //부분집합들을 담는 배열에 push
        console.log(flag);
        return;
      }
  
      flag[depth] = true;
      subSet(depth + 1);    //트리의 왼쪽에 대해 재귀호출
      flag[depth] = false;
      subSet(depth + 1);    //트리의 오른쪽에 대해 재귀 호출
    }
    subSet(0);      // depth 0 부터 시작
    return subSets;
  }
    const example = ["a","b","c"];
    const result = getSubsets(example);
    console.log(result);
    const result2 = result.filter((key)=> key.length>0);
    console.log(result2);