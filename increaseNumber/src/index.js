// A number increased by 7 equals 22. Write a function that return A number's value.
//  Return null if initial_value or final_value is not a number and when final_value is less than initial_value.


// Write the function to find the increaseNumber obtained.
function increaseNumber(initialValue, finalValue) {
  //your code here
  if(isNaN(initialValue)||isNaN(finalValue))
  {
    return null;
  }
  else if(finalValue<initialValue)
  {
    return null;
  }
  else{
    return finalValue-initialValue;
  }
}

//Use SpecRunner to check the Test Cases.