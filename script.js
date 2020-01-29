var wrapperEle = document.body.querySelector(".wrapper");
var checkEle = document.body.querySelector(".check");

var totalbill = prompt("What is the total of you bill?");
var baseCost = Number(totalbill);
var tax = (baseCost * 0.07);
var tip = (baseCost * 0.05);
var checkTotal = baseCost + tax + tip;

document.write("Total bill with tax and tip is: $" + checkTotal);




