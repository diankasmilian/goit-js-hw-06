const category = document.querySelectorAll('.item');
console.log('Number of categories:', category.length);

category.forEach(item => {
   const categoryName = item.firstElementChild.textContent;
   const categoryList = item.lastElementChild;
   const categoryItem = categoryList.children;

   console.log(`Categoty: ${categoryName}
    Elements: ${categoryItem.length}`)
});