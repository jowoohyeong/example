const arr= [1, 20, , 4];
const iterator = arr.keys();
const value = arr.values();
const keyObj = Object.keys(arr);
for(const key of iterator){
    console.log(key);
}
console.log(keyObj);
console.log();