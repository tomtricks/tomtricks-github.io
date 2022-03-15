document.getElementById("dayimage").src="./dayorder.png"


/*
var staticUrl="https://script.google.com/macros/s/AKfycbxX2SfOe0TGfgt27EsPULqhDUHQqYTr5rs6YW2YBnjCBUU4ha6X85aT0CJm0JBB3Wrf/exec"

var x;
var arrayContains;
var asterisk="(*) No day order given for specific date";

function dayorder(){
    
    var data=$.getJSON(staticUrl, function(data){
    
        // console.log("Hello");

x=document.getElementById("udate").value;
console.log(x);


 // Fetching the needed Value from JSON API
 var results=[];
 var searchField = "Datee";   //Datee is the column name in spreadsheet
 var searchVal=x;

 for(var i=0;i<data.user.length;i++){
     if(data.user[i][searchField]==searchVal){
         results.push(data.user[i].Day);
     }
 }

arrayContains=results.indexOf("*")>-1;
console.log(arrayContains);  

// checks for results array contains any value
if(results.length==0){
    document.getElementById("no_val").innerHTML="Invalid Date Format";
        console.log("Wrong Date Format");
        document.getElementById("undef").style.display="none";
    // reload
setTimeout(function (){
    location.reload(1);
},5000);
  
  
}
// when the result is (*) the boolean value change and dispaly the message accordingly
if(arrayContains === true){
    // console.log("It is *");
    document.getElementById("undef").innerHTML=asterisk;

}


else{

 document.getElementById("undef").innerHTML=results[0];

}
}
    );
   
   
}

*/
