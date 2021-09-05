let first = 10
let second = 20
let result = 0

function add(x, y) {
  return x + y
}
function getResult(callback) {
  setTimeout(function() {
    result = add(first, second)
    console.log(result) // 30
    callback()
  }, 1000)
}

getResult(function() {
  first = 20;
})
