/*🚀 Day 19 Challenge: Start Coding! 🚀

Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var doubleNumbers = numbers.map(function (number) { return number * 2; });
console.log(doubleNumbers);
/*Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.*/
var mixedArray = [1, "apple", 2, "banana", true, "carrot"];
var stringArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringArray);
/*Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.*/
var grades = [90, 80, 70, 60, 50, 88, 77];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 100) / grades.length;
console.log(averageGrade);
