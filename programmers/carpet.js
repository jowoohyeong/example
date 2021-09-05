function solution(brown, yellow) {
    const answer = [];
    
    for (let i = (brown + yellow); i > 1; i--) {
      // brown, yellow의 약수 찾기
      if ((brown + yellow) % i === 0) {
          console.log(i);
        // col의 가능성이 있는 친구들 찾기
        let col = (brown + yellow) / i + 2;
        console.log("col: "+col);
        // col은 이미 2를 더한 값이기 때문에 아래에서는 총 4를 빼준다.
        if ((col - 4) * (i - 2) === yellow) {
          // 큰 값이 row, 작은 값이 col
          const max = Math.max(...[i, col - 2]);
          const min = Math.min(...[i, col - 2]);
          
          // 최종 정답
          answer.push(max, min)
          console.log(answer);
          // 찾으면 멈춰준다
          break;
        }
      }
    }
    
    return answer;
  }
solution(10,2);