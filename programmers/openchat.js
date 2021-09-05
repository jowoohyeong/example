function solution(record) {
    var answer = [];
    let member = {};
    for(let i=0;i<record.length;i++){
        let a = record[i].split(" ")
        member[a[1]] = a[2];

    }
    console.log(member);


    return answer;
}
solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"])