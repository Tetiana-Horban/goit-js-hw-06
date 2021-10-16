const arrayListElement = document.querySelectorAll('.item');
const numberListElement = arrayListElement.length;
console.log(`Number of categories: `, numberListElement);
arrayListElement.forEach(element =>
  console.log(
    `Category: `,
    element.children[0].textContent,
    `Elements: `,
    element.children[1].children.length,
  ),
);
