// let paragraphElement = document.querySelector('p');
// console.log(paragraphElement);

// function handleparagraph () {
//     console.log('clicked')
//     paragraphElement.textContent = 'Clicked';
// }

// paragraphElement.addEventListener('click', handleparagraph);

let inputElement = document.querySelector('input');

function retrieveUserInput (event){
    // let enteredText = inputElement.value;
    // console.log(event);  
    let enteredText = event.target.value;
    console.log(enteredText);
}

inputElement.addEventListener('input', retrieveUserInput);