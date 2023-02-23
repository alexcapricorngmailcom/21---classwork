// let ul = document.querySelector('ul');
// let firstLi = document.querySelector('li:nth-child(2)');

// ul.insertBefore(firstLi, ul.firstChild);

// let thirdLi = document.querySelector('li:nth-child(5)');

// ul.insertBefore(thirdLi, ul.firstElementChild.nextElementSibling.nextElementSibling);

// let fourthLi = document.querySelector('li:nth-child(6)');

// ul.insertBefore(fourthLi, ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);

// let fifthLi = document.querySelector('li:nth-child(8)');

// ul.insertBefore(fifthLi, ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling)

// let ninthLi = document.querySelector('li:nth-child(9)');

// ul.append(ninthLi);

// let tenthLi = document.querySelector('li:nth-child(8)');

// ul.append(tenthLi);

//=====================================================================

// let i = 1;
// let ul = document.querySelector('ul');
// let li = document.querySelectorAll('li');

// li.forEach(el => {
//     el.innerText = i;
//     i++;
// });

//=====================================================================

let ul = document.querySelector('ul');
let li = [...document.querySelectorAll('li')];

li.sort(function(a, b){
    const numA = +a.innerText;
    const numB = +b.innerText;

    if (numA > numB) {
        return 1;
    }
    if (numA < numB) {
        return -1;
    }
});

li.forEach(el => ul.append(el));

let classBroke = document.querySelectorAll('.broke');
// classBroke.classList.remove('broke');
classBroke.forEach((el) => {
    el.classList.remove('broke');
});

let classOpen = document.querySelectorAll('.open');
classOpen.forEach(el => {
    el.classList.remove('open');
    el.classList.add('temp');
});

let classClose = document.querySelectorAll('.close');
classClose.forEach(el => {
    el.classList.remove('close');
    el.classList.add('open');
});

classOpen.forEach(el => {
    el.classList.remove('temp');
    el.classList.add('close');
});


const words = ['dolor', 'sit'];
const placeholder = 'asdfghjkl';

function replaceFromWords(words, placeholder) {
    let p = document.querySelector('p');

    let str = p.innerText.split(' ');
    let newStr;

    words.forEach(word => {
        newStr = str.map(el => {
            if (el == word) {
                return el = placeholder;
            } else {
                return el;
            }
        });
        str = newStr;
    });

    return p.innerText = newStr.join(' ');
};

replaceFromWords(words, placeholder);
