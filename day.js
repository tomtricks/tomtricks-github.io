
var staticUrl="https://script.google.com/macros/s/AKfycbxX2SfOe0TGfgt27EsPULqhDUHQqYTr5rs6YW2YBnjCBUU4ha6X85aT0CJm0JBB3Wrf/exec"

var data=$.getJSON(staticUrl, function(data){
    
    console.log("Hello");

    var today=new Date();
    var dd=String(today.getDate()).padStart(2,'0');  //january is 0
    var mm=String(today.getMonth()+1).padStart(2,'0');
    var yyyy=today.getFullYear();

    today = mm+'/'+dd+'/'+yyyy;
    // console.log(today); 



    // Fetching the needed Value from JSON API
    var results=[];
    var searchField = "Datee";
    var searchVal=today;

    for(var i=0;i<data.user.length;i++){
        if(data.user[i][searchField]==searchVal){
            results.push(data.user[i].Day);
        }
    }
    // console.log(results[0]);

//     document.getElementById("do").innerHTML=results[0];
    document.getElementById("do").innerHTML=Day 4;




}
);
