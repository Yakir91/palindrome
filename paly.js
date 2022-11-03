// Select the elements in the page
// Set them into a variable.
const testButton = document.querySelector('#test');
const resetButton = document.querySelector('#reset');
const inputName = document.querySelector('#field');
const message = document.querySelector('#message')

// clicking on test button to execute the function with the argumentor of the field value
testButton.addEventListener("click", () => {
    checkPalindrome(inputName.value);
    }
);

// resets the input value
resetButton.addEventListener("click", () => {
    inputName.value = "";
    testButton.style.backgroundColor = '';
    message.innerHTML = '';
});

// check if the string is a palindrome
function checkPalindrome(userString) {
    if (userString.length === 0) {
        alert('Please type in the field');
        return;
    }
    let splitStr = userString.split('');
    let splitStrRev = splitStr.reverse();
    let splitRevJoin = splitStrRev.join("");
    if (userString === splitRevJoin) {
        testButton.style.backgroundColor = "green";
        message.innerHTML = 'This is a Palindrom!';
    } else {
        testButton.style.backgroundColor = "red";
        message.innerHTML = 'This is NOT a Palindrom!';
    }
};

