/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', () => button.remove());
    document.body.append(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');
    document.body.append(ul);
    arr.forEach((elem) => {
        const li = document.createElement('li');
        li.textContent = elem;
        li.addEventListener('mouseover', () => li.setAttribute('title', elem));
        ul.append(li);
    });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const a = document.createElement('a');
    a.setAttribute('href', 'https://tensor.ru/');
    a.textContent = 'tensor';
    document.body.append(a);

    a.addEventListener('click', (e) => {
        const link = a.getAttribute('href');
        if (!a.textContent.includes(link)) {
            a.textContent += ` ${link}`;
            e.preventDefault();
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    document.body.insertAdjacentHTML(
        'beforeend',
        '<ul><li>Пункт</li></ul><button>Добавить пункт</button>',
    );

    const ul = document.querySelector('ul');
    ul.addEventListener('click', (e) => (e.target.textContent += '!'));

    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        const elem = document.createElement('li');
        elem.textContent = 'Пункт';
        ul.append(elem);
    });
}
