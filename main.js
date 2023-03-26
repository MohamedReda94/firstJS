document.getElementById("average").innerHTML=(1+2+3+4+5+6+7+8+9+10)/10;
let usection=document.querySelector(".pragraph");
let isshow = true;
function show(){
    if (isshow){
    usection.style.display="none";
    isshow=false;
}else{
    usection.style.display="block";
    isshow=true;

}
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function formvalidate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var Telephone=document.getElementById("Telephone").value;
    var error=document.getElementById("error");
    var text="";

    if (name.length<3){
        text="please entre valid username";
        error.innerHTML=text;
        return false;
    }
    else if(email.indexOf("@")==-1){
        text="please entre valid email";
        error.innerHTML=text;
        return false;
    }
    else if(isNaN(Telephone)){
        text="please entre valid password";
        error.innerHTML=text;
        return false;
    }
    else{
        alert("Done")
        return true;
    }

  }