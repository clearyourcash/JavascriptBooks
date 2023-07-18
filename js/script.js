'use strict'

// Восстановить порядок книг
let bookItem = document.querySelectorAll('.book')
//console.log(bookItem)
let allBooks = document.querySelector('.books')
//console.log(allBooks)

allBooks.prepend(bookItem[1])
allBooks.append(bookItem[2])
bookItem[3].before(bookItem[4])

//Заменить картинку заднего фона на другую из папки image
document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"

// Удалить рекламу со страницы OK
let commercial = document.querySelector('.adv') 
//console.log(commercial)
commercial.remove()

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
let linkA = document.querySelectorAll('a')
console.log(linkA)
linkA[2].innerHTML = 'Книга 3. this и Прототипы Объектов'

// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
let ulTag = document.querySelectorAll('ul > li')
console.log(ulTag)

// Книга 2 
ulTag[7].after(ulTag[9])
ulTag[9].after(ulTag[12])
ulTag[12].after(ulTag[14])
ulTag[14].after(ulTag[10])
ulTag[10].after(ulTag[11])
ulTag[11].after(ulTag[13])
ulTag[13].after(ulTag[15])

// Книга 5 
ulTag[37].after(ulTag[45])
ulTag[45].after(ulTag[39])
ulTag[39].after(ulTag[40])
ulTag[40].after(ulTag[38])
ulTag[38].after(ulTag[42])
ulTag[42].after(ulTag[43])
ulTag[43].after(ulTag[41])
ulTag[41].after(ulTag[44])
ulTag[44].after(ulTag[46])

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let newLiTag = document.createElement('li')
newLiTag.innerHTML = "Глава 8: За пределами ES6"
console.log(newLiTag);
ulTag[55].after(newLiTag)