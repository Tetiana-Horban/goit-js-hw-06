const arrayListElement = document.querySelectorAll('.item');
const numberListElement = arrayListElement.length;
console.log(`Number of categories: `, numberListElement);

const arrayTitleElementCategory = [...arrayListElement].map(
  categories => categories.children[0].textContent,
);
const numberItemElement = [...arrayListElement].map(
  categories => categories.children[1].children.length,
);

console.log(`Category: `, arrayTitleElementCategory[0]);
console.log(`Elements:`, numberItemElement[0]);
console.log(`Category: `, arrayTitleElementCategory[1]);
console.log(`Elements:`, numberItemElement[1]);
console.log(`Category: `, arrayTitleElementCategory[2]);
console.log(`Elements:`, numberItemElement[2]);
