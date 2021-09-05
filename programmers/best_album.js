function solution(genres, plays) {
    var answer = [];
    let songs = {};
    var sumplays = {};

    genres.forEach((value, key) =>{
        if(!songs[value])   songs[value]= [];
        const infor = {
            value,
            play : plays[key],
            idx : key
        }
        songs[value].push(infor);
        sumplays[value] =(sumplays[value] || 0) + plays[key];
    });
    let sumob = [];
    for (let i in sumplays){
        sumob.push({
            genres : i,
            sum : sumplays[i]
        });
    }
    sumob.sort((a,b)=> b.sum - a.sum); 

    
    sumob.forEach((value, key) =>{
        let target = songs[value.genres];

        target.sort((a,b)=> b.play - a.play)

        target[0] && answer.push(target[0].idx);
        target[1] && answer.push(target[1].idx);
    })

    return answer;
}
let genres = ["classic", "pop", "classic", "classic", "pop"]
let plays = [500, 600, 150, 800, 2500];
let returnnn = [4, 1, 3, 0]
let a = solution(genres,plays);

console.log(a);

