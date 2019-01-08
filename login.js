function auth(){
  var a=document.getElementById("usernameA").value;
  var b=document.getElementById("passwordA").value;
  var c=document.getElementById("confPasswordA").value;
  if(b==c){
    var d=document.getElementsByTagName("FORM")[0];
    d.children[0].value=a;
    d.children[1].value=b;
    d.submit();
  }
}
    
  
