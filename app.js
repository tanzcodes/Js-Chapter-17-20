//Chapter 17-20
//Question 1:
 var arr = [];

 //Question 2:
  var arr = [
    [0, 1, 2, 3],
   [1, 0, 1, 2],
  [2, 1, 0, 1]
 ];

 //Question 3:
 for (var i = 0; i < arr.length; i++) {
   document.write(arr[i].join(" ") + "<br>");
  }

 //Question 4:
  for (var i = 1; i <= 10; i++) {
   document.write(i + "<br>");
  }

//Question 5:
  var num = prompt("Enter number");
  var len = prompt("Enter table length");
  for (var i = 1; i <= len; i++) {
   document.write(num + " x " + i + " = " + (num * i) + "<br>");
  }

//Question 6:
  var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
   document.write(fruits[i] + "<br>");
  }

//Question 7:
 let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
 let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma’am?");
userInput = userInput.toLowerCase();
 let index = bakery.indexOf(userInput);
  if (index !== -1) {
      document.write(userInput + " is available at index " + index + " in our bakery");
  } else {
      document.write("We are sorry. " + userInput + " is not available in our bakery");
  }
  
//Question 8:
  var A = [24, 53, 78, 91, 12];
  var max = A[0]; // pehla element assume kar liya
  for (var i = 1; i < A.length; i++) {
    if (A[i] > max) {
        max = A[i];
    }
 }
  document.write("Largest number is: " + max);

//Question 9:
  var A = [24, 53, 78, 91, 12];
  var min = A[0]; // pehla element assume kar liya
for (var i = 1; i < A.length; i++) {
    if (A[i] < min) {
          min = A[i];
     }
  }
  document.write("Smallest number is: " + min);

 //Question 10:
 for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i + ", ");
    }
}

