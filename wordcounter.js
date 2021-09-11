
function lower(){
  textArea.value= textArea.value.toLowerCase();
}
function upper(){
   textArea.value= textArea.value.toUpperCase();
 }
function clr(){
   textArea.value="";
}
function del(){
   textArea.value=textArea.value.slice(0,-1);
}
function ctt(){
   var meee = textArea.value;
   var rep = meee.replace(/ /g,"");
   showWord.innerText= 1+rep.length;  
   showCharacter.innerText= meee.split(" ").length;
}

function addUp(){
  var num22 = num1.innerText= Number(num1.innerText)+1;
   num1.innerText=eval(num1.innerText);
   
}
   





