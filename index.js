const gradeTable = { 'A+': 10, 'A': 10, 'A-': 9, 'B': 8, 'B-': 7, 'C': 6, 'C-': 5, 'D': 4, 'F': 0, 'FS': 0, 'I': 0 };
let cgsum = 0;
let cgcred=0;

document.getElementById("entre").onclick=function(){

    let resArr = [];

    resArr = [
        [document.getElementById('c1Grade').value, parseFloat(document.getElementById('c1Credit').value)] , 
        [document.getElementById('c2Grade').value, parseFloat(document.getElementById('c2Credit').value)] , 
        [document.getElementById('c3Grade').value, parseFloat(document.getElementById('c3Credit').value)] ,
        [document.getElementById('c4Grade').value, parseFloat(document.getElementById('c4Credit').value)] ,
        [document.getElementById('c5Grade').value, parseFloat(document.getElementById('c5Credit').value)]
    ]
    
    
    for (let j = 0; j < resArr.length; j++) {
        console.log(resArr[j][0]);
        if (gradeTable.hasOwnProperty(resArr[j][0])){
            cgsum = cgsum + (resArr[j][1]*gradeTable[resArr[j][0]]);
            console.log(cgsum);
        }
    }
    
    for( let k = 0; k < resArr.length ; k++){
        cgcred += resArr[k][1];
    }
    console.log(cgsum,cgcred);
    const cgp = cgsum/cgcred;
    console.log(cgp,cgsum/cgcred);
    alert(`Your CG is ${cgp}`);
    
}