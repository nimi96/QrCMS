
/*
function myFunction() {


  var  code = document.getElementById('code').value;

console.log(code);


}

*/
$(document).ready(function(){


    $('#btn').click(function(){
   var  code = document.getElementById('code').value;

    console.log(code);


        $.post("users/data",
        {

        data:code

        },

function(data,status){
console.log("Data: " + data + "\nStatus: " + status);
var c=document.getElementById("demo").innerHTML ="<path d= '  "+data+"'/>"
console.log(c);


        });




document.getElementById("demo").setAttribute("transform", "scale(3.0)");

console.log("imageupdate");













});








});
