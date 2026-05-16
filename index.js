const gradeTable = { 'A+': 10, 'A': 10, 'A-': 9, 'B': 8, 'B-': 7, 'C': 6, 'C-': 5, 'D': 4, 'F': 0, 'FS': 0, 'I': 0};
let cgsum = 0;
let cgcred=0;

document.getElementById("entre").onclick=function(){

    let resArr = [];
    resArr = [
        [document.getElementById('c1Grade').value, parseFloat(document.getElementById('c1Credit').value)] ,
        [document.getElementById('c2Grade').value, parseFloat(document.getElementById('c2Credit').value)] ,
        [document.getElementById('c3Grade').value, parseFloat(document.getElementById('c3Credit').value)] ,
        [document.getElementById('c4Grade').value, parseFloat(document.getElementById('c4Credit').value)] ,
        [document.getElementById('c5Grade').value, parseFloat(document.getElementById('c5Credit').value)] ,
        [document.getElementById('c6Grade').value, parseFloat(document.getElementById('c6Credit').value)]
    ]

    for (let j = 0; j < resArr.length; j++) {
        let grade = resArr[j][0];
        let credit = resArr[j][1];

        // Default credit to 0 if blank or NaN
        if (!credit || isNaN(credit)) {
            credit = 0;
            resArr[j][1] = 0;
        }

        // Default grade to 'F' if blank or not in gradeTable
        if (!grade || !gradeTable.hasOwnProperty(grade)) {
            grade = 'F';
            resArr[j][0] = 'F';
        }
    }

    for (let j = 0; j < resArr.length; j++) {
        cgsum = cgsum + (resArr[j][1] * gradeTable[resArr[j][0]]);
    }

    for (let k = 0; k < resArr.length; k++) {
        cgcred += resArr[k][1];
    }
    alert(`Your GPA is ${cgsum/cgcred}`);
}