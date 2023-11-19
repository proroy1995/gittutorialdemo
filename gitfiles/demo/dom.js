console.log(document.domain);
console.log(document.URL);
console.log(document.title);

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent = 'Hello';

var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');

headerTitle.style.borderBottom = 'solid 5px #000';