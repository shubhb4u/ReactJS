let productName = document.getElementById('product-name');
let remainingCharsElements = document.getElementById('remaining-chars');

// console.dir(productName);
let maxAllowedChars = productName.maxLength;

function updatecount (event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingchars = maxAllowedChars-enteredTextLength;
    remainingCharsElements.textContent = remainingchars;

    if(remainingchars <= 50){
        productName.classList.add('warning');
        remainingCharsElements.classList.add('warning');
    }
    else{
        productName.classList.remove('warning');
        remainingCharsElements.classList.remove('warning');
    }
}


productName.addEventListener('input', updatecount);