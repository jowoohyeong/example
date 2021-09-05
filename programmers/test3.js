function fn_newCallBack(){
    console.log("비동기적으로 호출되고 싶다.");
  }
  
  console.log("-------  호출 직전 -------");
  
  setTimeout(fn_newCallBack, 3 * 1000); // 3초 뒤 콜백 호출
  
  console.log("-------  호출 이후 -------");

  function checkID(){
    console.log("before");
    var results;
    sendAjax(function (result){
      console.log(result.result);
      if(result.result ==="ok")
        return true;
    });
    return false;
  }




function getData(callbackFunc) {
    $.get('https://domain.com/products/1', function(response) {
        callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
    });
}
var a = function(tableData) {
	console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
};
getData(a);