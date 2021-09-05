var genres =["classic", "pop", "classic", "classic", "pop"];
var plays = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
    const answer = []
    const songs = {}
    const playCount = {}
    
    genres.forEach((genre, idx) => {       

        if(!songs[genre]) songs[genre] = []

        const info = {
            genre,
            play: plays[idx],
            index: idx
        }

        songs[genre].push(info)
        playCount[genre] = (playCount[genre] || 0) + plays[idx]
    })
    
    const playCountArr = [];
    for(let key in playCount) {
        playCountArr.push({
            genre: key,
            count: playCount[key]
        })
    }
 
    
    // 재생수 배열을 내림차순 정렬 - 장르의 플레이 횟수대로 내림차순 정렬됨
    playCountArr.sort((a, b) => b.count - a.count)

    // playCountArr 배열을 순회하면서 장르마다 가장 재생수가 많은 곡 2곡씩 push
    playCountArr.forEach(el => {
        const targetGenre = songs[el.genre] 
        targetGenre.sort((a, b) => b.play - a.play)
        targetGenre[0] && answer.push(targetGenre[0].index)
        targetGenre[1] && answer.push(targetGenre[1].index)
    })
    
    console.log(songs)
    return answer
    
}



var zz= solution(genres, plays);
