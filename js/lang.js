const arrLang = {
    'eng': {
        'menuMain': 'Home',
        'menuAbout': 'About',
        'menuWorks': 'Works',
        'menuSocial': 'Social',
        'mainName': 'Ivan Sheyko',
        'mainDesc': 'Front-end developer 25 years old, Donetsk',
        'aboutTitle': 'About',
        'aboutText': "<p>Graduated from Udemy's Web Developer course. Good knowledge of <strong>HTML/CSS</strong>. <br> Main skills: <strong>adaptive layout, preprocessors, BEM, Flex-box, Grid, Gulp, Git</strong>.</p> <br> <p><strong>JavaScript и JQuery</strong>. I studied <strong>native JS</strong> and try to consolidate all the knowledge gained in practice. </p><br> <p>The level of English is <strong>Intermediate</strong> or B1.</p> <br> <p>I consider my main skill to be easy to learn and the ability to use Google.</p>",
        'worksTitle': '<p>Works</p>',
        'socialTitle': '<p>Contact me</p>',
        'popupTestTitle': '<p>Responsive landing page layout</p>',
        'popupTestDesc': '<p>The task was to make an adaptive landing page using CSS as much as possible</p> <p>In my work I used JQuery, SCSS, FLEX, GRID</p>',
        'popupBtnCode': 'View code',
        'popupBtnWeb': 'View website',
        'popupFitnessTitle': '<p>Responsive landing page layout</p>',
        'popupFitnessDesc': '<p>The task was to develop an interactive builder that would allow users to create burgers by selecting ingredients and optional add-ons.</p> <p>I used JS, SСSS, FLEX, GRID, Git</p>',
        
    },
    'ru': {
        'menuMain': 'Главная',
        'menuAbout': 'Обо мне',
        'menuWorks': 'Работы',
        'menuSocial': 'Контакты',
        'mainName': 'Иван Шейко',
        'mainDesc': 'Front-end разработчик 25 лет, Донецк',
        'aboutTitle': 'Обо мне',
        'aboutText': '<p>Окончил курс Udemy “Веб-разработчик”. Хорошо знаю <strong>HTML/CSS</strong>. <br> Ключевые навыки: <strong>адаптивная верстка, препроцессоры, БЭМ, Flex-box, Grid, Gulp, Git</strong>.</p> <br> <p><strong>JavaScript и JQuery</strong>. Изучил <strong>нативный JS</strong> и закрепляю все полученные знания на практике. </p><br> <p>Английским владею на уровне <strong>Intermediate</strong> или B1.</p> <br> <p>Своим главным навыком считаю легкообучаемость и умение пользоваться гуглом.</p>',
        'worksTitle': '<p>Работы</p>',
        'socialTitle': '<p>Свяжитесь со мной</p>',
        'popupTestTitle': '<p>Адаптивная верстка лендинга</p>',
        'popupTestDesc': '<p>Задачей было сверстать адаптивно лендинг максимально используя CSS</p><p>В работе использовал JQuery, SCSS, FLEX, GRID</p>',
        'popupBtnCode': 'Посмотреть код',
        'popupBtnWeb': 'Перейти на сайт',
        'popupFitnessTitle': '<p>Адаптивная верстка лендинга</p>',
        'popupFitnessDesc': '<p>Задачей было разработать интерактивный конструктор, который позволил бы пользователям создавать бургеры, выбирая ингредиенты и опциональные добавки. </p>  <p>в работе использовал JS, SСSS, FLEX, GRID, Git</p>',
    },
};


// $('.main__btn').each(function() {
//     $(this).click(function() {

//         // $('.main__btn').removeClass('main__btn_black')
//         // $(this).addClass('main__btn_black')
        
//         let lang = $(this).attr('id');
        
//         $('.lang').each(function() {
//             $(this).html(arrLang[lang][$(this).attr('key')]);
//         });
//     });
// });

const langChange = document.querySelectorAll('.main__btn');
const lang = document.querySelectorAll('.lang');

langChange.forEach((itemLang) => {
    itemLang.addEventListener('click', () => {
        langChange.forEach((itemLang) => {
            itemLang.classList.remove('main__btn_black')
        });
        itemLang.classList.add('main__btn_black')

        lang.forEach((item) => {
            item.innerHTML = arrLang[itemLang.getAttribute('id')][item.getAttribute('key')]
        });
    });
})