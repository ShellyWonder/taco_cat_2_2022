function getValue() {
    //hide alert before function is executed
    document.getElementById("alert").classList.add('invisible');
        //Get user Input from the DOM:
    let userString = document.getElementById("userString").value;
    let returnObject = ckPalindrome(userString);
    displayData(returnObject);
}
//LOGIC: reverse string and comparing for palindrome

function ckPalindrome(userString) {
    //make all characters lower case to remove casing conflicts in comparisons
    userString = userString.toLowerCase();
     //remove special characters and spaces
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let revString = [];
    returnObject = {};
    //Reversing the user string
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
        
    }
    if (revString == userString) {
        returnObject.msg = "Congratulations! You have a palindrome."
        
    }
    else {
        returnObject.msg = "Sorry, you do not have a palindrome."
    }
    
    returnObject.reversed = revString;
    return returnObject;
}

//Display data back to the DOM

function displayData(returnObject) {

    document.getElementById("alertHeader").innerHTML = returnObject.msg;
    document.getElementById("msg").innerHTML = ` Your string reversed is: "${returnObject.reversed}."`
    //Make alert visible
    document.getElementById("alert").classList.remove('invisible');
  
}