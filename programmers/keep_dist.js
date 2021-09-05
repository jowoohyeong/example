function solution(places) {
    var answer = [];
    places = places.map((p)=> p.map((el)=> el.split("")))
    
    for(let i =0;i<places.length;i++){
        answer.push(keep_distance(places[i]));
    }
    return answer;
}
function keep_distance(place){
    for(let i=0;i<place.length;i++){
        for(let j=0;j<place.length;j++){
            if(place[i][j]==="P"){
                let result = check(i, j, place);
                if(result === 0 ) return 0;
            }
        }
    }
    return 1
}
function check(x,y, place){
    if(x<4 && place[x+1][y]==="P") return 0;
    if(x<3 && place[x+2][y]==="P" && place[x+1][y] ==="O")  return 0;
    if(y<4 && place[x][y+1]==="P") return 0;
    if(y<3 && place[x][y+2]==="P" && place[x][y+1] ==="O")  return 0;
    if(x<4 && y<4 && place[x+1][y+1] ==="P")
        if(place[x+1][y] ==="O" || place[x][y+1] ==="O") return 0;
    if(x<4 && y>0 && place[x+1][y-1] ==="P")
        if(place[x+1][y] ==="O" || place[x][y-1] ==="O") return 0;    
}
solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]])