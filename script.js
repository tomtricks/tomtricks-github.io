var deptname;
let selectedValue;
var comb;
var loc="timetable/";
const exten=".png";

// exten.forEach(element => {
//     console.log(element)
    
// });

function displayName(){
    deptname = ((document.getElementById("dept").value).substring(0,6)).toUpperCase();
   
    // section=document.getElementsByName("section").value;
    const rbs=document.querySelectorAll('input[name="section"]');

    // to loop through the values in radio button 
    for(const rb of rbs){
        if(rb.checked){
            selectedValue = rb.value;
            break;
        }
    }
    
    // remove from console
    // console.log(deptname);
    // console.log(selectedValue);
 
    // comb=deptname;
    
    comb=deptname+selectedValue;
    // console.log(comb);
    try{ 
    document.getElementById("myimg").src=loc+comb+exten;
    }
    // console.log(comb+exten);
    catch(err){
        console.log(err);
        alert(e);
        
        // document.getElementById("displayError").innerHTML= err.message;
        alert("File not found");
    }
// var x=document.getElementById("imagediv");
//         if(x.style.dispaly ==="none"){
//             x.style.display="block";
//         }
//         else{
//             x.style.display = "none";
//         }


document.getElementById("imagediv").style.display="";

}




// var output="tom";
// console.log(output);
// console.log();
