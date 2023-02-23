// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
const firstButton = document.querySelector('button');
const secondButton = document.getElementById('second');
console.log(firstButton);
console.log(secondButton);


// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored


// const removeParagraph = () => {

//     console.dir(firstButton);
// }

// const changeParagraph = (e) => {

//     console.dir(e.target);
// }

// firstButton.addEventListener('click', removeParagraph);
// secondButton.addEventListener('click', changeParagraph);


// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

const firstPara = document.body.children[2].children[1];
const thirdPara = document.body.children[2].children[3];
console.log(firstPara);
console.log(thirdPara);

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

const removeParagraph = () => {

    thirdPara.remove();
}

const changeParagraph = (e) => {

    console.dir(e.target);
}

firstButton.addEventListener('click', removeParagraph);
secondButton.addEventListener('click', changeParagraph);
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!