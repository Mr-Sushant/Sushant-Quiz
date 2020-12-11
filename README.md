# Sushant-Quiz

This app is made using Node.js . It comprises of certain questions based on me to test how much a person know about me.

## Source Code

A gist of my source code is provided below showing how I used object as a data structure to store a question and its respective answer.

```bash
var ques1 = {
	question : "Which city I live in ?",
	answer : "lucknow"
}
```

## Working


## Lessons Learned

I got to know a lot of new things from this session. 
* Dividing a bigger code into smaller functions
* How to choose a correct data structure based upon our requirements
* Got to learn about "readline-sync" and "CHALK" libraries in npm.

## readline-sync

The basic use of readline-sync which I understood from the session was that it is used to take input from the user in many different ways. Some of the ways are :
* Text input
* Number input
* Y/N input
* Input from a list of options
* A keystroke from a keyboard

To use readline-sync or any library we first have to include it in our code. To do that we use 
```bash
var readLineSync = require("readline-sync");
```
To ask question from user we use
``` bash
var userAns = readLineSync.question("What is your name ?");
```
## CHALK

This library I have used in my other project. You can check my learnings from there.