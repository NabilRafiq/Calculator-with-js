function getnum(num){
  
    var result=document.getElementById('result');
    if (result.value==0){
        result.value='';
    }
    result.value+=num;

}
function c1(){
    var result=document.getElementById('result');
    result.value=0;
}
function result(){

    try {
        var result=document.getElementById('result');
        result.value=eval(result.value);
      } catch(err){
         var result=  document.getElementById('result');
          result.value="You broke it";
        }
}
function mou1(){
   document.getElementById("cc").style.color='white';
   document.getElementById("cc").style.backgroundColor='rgb(58, 60, 61)';
}
function mou2(){
    document.getElementById("cc").style.color='black';
    document.getElementById("cc").style.backgroundColor='white';
}