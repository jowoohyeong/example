const solution = (n, times) => {
    times.sort((a,b) => a-b);
    let left = 0;
    let right = times[times.length-1]*n;
    let mid = Math.floor((left+right)/2);

    console.log(" ",left, mid, right);
    while(left <= right){
      const count = times.reduce((result, cur) => result + Math.floor(mid/cur), 0);
      
      if(count >= n) { right = mid-1; }
      else if(count < n) { left = mid+1; }
      
      mid = Math.floor((left+right)/2);
      console.log(count, left, mid, right);
    }
  
    return left;
  }
solution(6, [7, 10]);