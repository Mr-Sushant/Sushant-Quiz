var read = require("readline-sync");
var score = 0;
var index=0;
function greet(){
	var userName = read.question("Hey !!.. What's your name ?");
	console.log("Welcome "+userName+'.. Lets see "How well you know Sushant"');
	console.log("Rules :");
	console.log("Correct Answer : 1 point");
	console.log("Incorrect Answer : 0 point");
	read.keyInPause();
}
greet();
function level1Greet(){
	console.log("Welcome to LEVEL 1.");
	console.log("-----------------------");
	console.log("Answer 3 questions correctly to proceed to next Level.");
}
function level2Greet(){
	console.log("Welcome to LEVEL 2.");
	console.log("-----------------------");
	level2Questions();
}
function askQuestionAndCheckAnswer(ques,ans){
	var userAns = read.question(ques);
	if(userAns.toUpperCase() === ans.toUpperCase()){
		score++;
		console.log("YAAAAY..!!!!! You got it right..");
	}
	else
		console.log("Oopss... You are wrong..");
	console.log("Your Score : "+score);
}
function level1Questions(){
	for(index=0;index<7;index++){
		var curQues = quesArr[index];
		askQuestionAndCheckAnswer(curQues.question, curQues.answer);
		if(score === 3)
			return "pass";
	}
	return "fail";
}
function level2Questions(){
	for(var j=index;j<7;j++){
		curQues = quesArr[j];
		askQuestionAndCheckAnswer(curQues.question, curQues.answer);
		if(score === 7){
			console.log("Hooraah.... You WON..!!!");
			break;
	}
	
}
if(score != 7)
		console.log("You LOST Level 2..")
}
//questions
var ques1 = {
	question : "Which city I live in ?",
	answer : "lucknow"
}
var ques2 = {
	question : "What is my favourite food ?",
	answer : "maggi"
}
var ques3 = {
	question : "My favourite person ?",
	answer : "nayonika"
}
var ques4 = {
	question : "What is my Blood Group ?",
	answer : "A+"
}
var ques5 = {
	question : "My shoe size ?",
	answer : "10"
}
var ques6 = {
	question : " What would I prefer ? Hot chocolate / Cold chocolate shake",
	answer : "cold chocolate shake"
}
var ques7 = {
	question : "What was my house name ?",
	answer : "ishu"
}
var quesArr = [ques1,ques2,ques3,ques4,ques5,ques6,ques7];

var lvl1Status = level1Questions();
if(lvl1Status === "pass"){
	level2Greet();
}
else{
	console.log("Sorry.. You didn't make it into Level 2.");
}