// this is the code
// Here is where the user enter their marks

let total = prompt("Please Enter Marks!");

// Now here is where the grade is assigned depending on your marks



function gradeMarks() {

    let grade = "";

    if (total >= 79 && total <= 100) {
            grade = 'A';
            window.alert("Congratulations you scored grade A")
    } else if (total >=60 && total <=78) {
            grade ='B'
            window.alert("Congratulations you scored grade B")
    } else if (total >=49 && total <= 59) {
            grade = 'C'
            window.alert("You scored grade C")
    } else if (total >=40 && total <=48) {
            grade ='D'
            window.alert("You scored grade D. Put some effort.")
    }else if (total >=40 && total <=0) {
            grade = 'E'
            window.alert("You scored grade E! Work extra hard")
    } else {
            grade = 'Invalid'
            window.alert("enter correct marks")
    }
    document.getElementById("grade").innerHTML=grade
}
gradeMarks()


