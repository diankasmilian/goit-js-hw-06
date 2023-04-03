const category = document.querySelectorAll('.item');
console.log('Number of categories:', category.length);

category.forEach(item => {
   const categoryName = item.querySelector('h2').textContent;
   const categoryItem = item.querySelectorAll('li');

   console.log(`Categoty: ${categoryName}
    Elements: ${categoryItem.length}`)
});