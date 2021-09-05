const a= [1,4,7];
const b =[5,2,3];
const c = a.concat(b);

nextindex = c.entries();    //다시공부
console.log(c);
for(let i =0; i< c.length; i++){
    console.log(nextindex.next().value);
}

var vegetables = ['설탕당근', '감자'];
var moreVegs = ['셀러리', '홍당무'];

vegetables=vegetables.concat(moreVegs);
// =Array.prototype.push.apply(vegetables, moreVegs);
console.log(vegetables);
