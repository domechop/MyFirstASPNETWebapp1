/*Aidan Garry January 13th 2021*/

/*Use function when button is clicked by user.*/
$("#btnSend").click(function () {

/*make variables*/
    var finalgrade;
    var lettergrade;
    var assignment;
    var group;
    var quiz;
    var exam;
    var intex;
/* initialize variables using jquery*/
    assignment = $("#numAssignments").val();
    group = $("#numGroup").val();
    quiz = $("#numQuiz").val();
    exam = $("#numExam").val();
    intex = $("#numIntex").val();


/* calculate final grade based on syllabus*/
    finalgrade = (assignment * 0.55) + (group * 0.05) + (quiz * 0.10) + (exam * 0.20) + (intex * 0.10);

/*use if statement to find letter grade based on numbers inputted*/
    if (finalgrade > 94) {
        lettergrade = "A";
    }
    else if (finalgrade > 90 && finalgrade < 94) {
        lettergrade = "A-";
    }
    else if (finalgrade >= 87 && finalgrade < 90) {
        lettergrade = "B+";
    }
    else if (finalgrade >= 84 && finalgrade < 87) {
        lettergrade = "B";
    }
    else if (finalgrade >= 80 && finalgrade < 84) {
        lettergrade = "B-";
    }
    else if (finalgrade >= 77 && finalgrade < 80) {
        lettergrade = "C+";
    }
    else if (finalgrade >= 74 && finalgrade < 77) {
        lettergrade = "C";
    }
    else if (finalgrade >= 70 && finalgrade < 74) {
        lettergrade = "C-";
    }
    else if (finalgrade >= 67 && finalgrade < 70) {
        lettergrade = "D+";
    }
    else if (finalgrade >= 64 && finalgrade < 67) {
        lettergrade = "D";
    }
    else if (finalgrade >= 60 && finalgrade < 64) {
        lettergrade = "D-";
    }
    else if (finalgrade < 60) {
        lettergrade = "E";
    }

    /*make alert with final grade and letter grade */
    alert("The student's grade is a " + finalgrade + "% with a letter grade of " + lettergrade);

})
