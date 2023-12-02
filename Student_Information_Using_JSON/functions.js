// import table from './database.json' assert {'type' : 'json'}; -- To Open JSON file as MODULE
fetch("database.json")
.then(response =>response.json())
.then(table => showTable(table));

function showTable(table){
var lessons = table.Lessons;
var number = parseInt(prompt("What lesson do you want: "));
document.getElementById("paragraph").style.opacity =1;
document.getElementById("paragraph").style.borderRadius = "100px";
document.getElementById("paragraph").style.width = "600px";
document.getElementById("paragraph").style.height = "auto";
document.getElementById("paragraph").style.textAlign = "right";
if (number <= lessons.length){
    Object.values(lessons[number - 1]).forEach((contents) => {
            //Lesson_Number
            document.getElementById("lesson_no").textContent += contents.Lesson_Number;

            //Title
            document.getElementById("title").textContent += contents.Title;
            
            //Objectives
            document.getElementById("objectives").textContent += contents.Objectives;

            //Summarization
            document.getElementById("summarization").textContent += contents.Summarization;
            
            //Introduction
            document.getElementById("introduction").textContent += contents.Introduction;

            //First_Romans
            document.getElementById("first_roman").textContent += contents.First_Romans;

            //Second_Romans
            document.getElementById("second_roman").textContent += contents.Second_Romans;
            
            //Third_Romans
            document.getElementById("third_roman").textContent += contents.Third_Romans;

            //Conclusion
            document.getElementById("conclusion").textContent += contents.Conclusion;
        });
}
else{
    console.log("Error 404: Not Found!");
}
}