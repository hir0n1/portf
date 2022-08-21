const arrLang = {
    'eng': {
        'menuMain': 'Home',
        'menuAbout': 'About',
        'menuWorks': 'Works',
        'menuSocial': 'Social',
        'mainName': 'Ivan <br> Sheyko',
        'mainDesc': 'Beginner <br> Front-end developer <br> 25 years old, Donetsk',
        'aboutTitle': 'About',
        'aboutText': "<p> My programming career was started by spending 70% of my free time at the computer. At university I came across such languages as: Assembly, C, C++.</p> <br> <p>The final choice fell on Front-end development, because development of the interface and functions seem to be the most interesting among other areas.</p> <br> <p>Graduated from Udemy's Web Developer course. Good knowledge of <strong>HTML/CSS</strong>. <br> Main skills: <strong>adaptive layout, preprocessors, BEM, Flex-box, Grid, Gulp, Git</strong>.</p> <br> <p><strong>JavaScript и JQuery</strong>. I studied <strong>native JS</strong> and try to consolidate all the knowledge gained in practice. </p><br> <p>The level of English is <strong>Intermediate</strong> or B1.</p> <br> <p>I consider my main skill to be easy to learn and the ability to use Google.</p> <br> <p>I understand that there is still a lot to be explored, but the ambitions are huge. In a year I'm going to become a Senior developer. But it is not exactly.</p>",
        'worksTitle': '<p>Works</p>',
        'socialTitle': '<p>Contact me</p>',
        'popupTestTitle': '<p>Responsive landing page layout</p>',
        'popupTestDesc': '<p>The task was to make an adaptive landing page using CSS as much as possible</p> <p>In my work I used JQuery, SCSS, FLEX, GRID</p>',
        'popupBtnCode': 'View code',
        'popupBtnWeb': 'View website'
        
    },
    'ru': {
        'menuMain': 'Главная',
        'menuAbout': 'Обо мне',
        'menuWorks': 'Работы',
        'menuSocial': 'Контакты',
        'mainName': 'Иван <br> Шейко',
        'mainDesc': 'Начинающий <br> Front-end разработчик 25 лет, Донецк',
        'aboutTitle': 'Обо мне',
        'aboutText': '<p>Свой путь в программировании начинал с проведения за компьютером 70% свободного времени. В университете сталкивался с такими языками как: Assembly, C, C++.</p> <br> <p>Окончательный выбор пал на Front-end разработку, т.к. разработка интерфейса и функций кажутся наиболее интересными среди остальных направлений.</p> <br> <p>Окончил курс Udemy “Веб-разработчик”. Хорошо знаю <strong>HTML/CSS</strong>. <br> Ключевые навыки: <strong>адаптивная верстка, препроцессоры, БЭМ, Flex-box, Grid, Gulp, Git</strong>.</p> <br> <p><strong>JavaScript и JQuery</strong>. Изучил <strong>нативный JS</strong> и стараюсь закрепить все полученные знания на практике. </p><br> <p>Английским владею на уровне <strong>Intermediate</strong> или B1.</p> <br> <p>Своим главным навыком считаю легкообучаемость и умение пользоваться гуглом.</p> <br> <p>Понимаю, что много еще предстоит изучить, но амбиции огромные. Через годик собираюсь стать Senior разработчиком. Но это не точно.</p>',
        'worksTitle': '<p>Работы</p>',
        'socialTitle': '<p>Свяжитесь со мной</p>',
        'popupTestTitle': '<p>Адаптивная верстка лендинга</p>',
        'popupTestDesc': '<p>Задачей было сверстать адаптивно лендинг максимально используя CSS</p><p>В работе использовал JQuery, SCSS, FLEX, GRID</p>',
        'popupBtnCode': 'Посмотреть код',
        'popupBtnWeb': 'Перейти на сайт'
    },
};


$('.main__btn').each(function() {
    $(this).click(function() {

        $('.main__btn').removeClass('main__btn_black')
        $(this).addClass('main__btn_black')
        
        let lang = $(this).attr('id');
        
        $('.lang').each(function() {
            $(this).html(arrLang[lang][$(this).attr('key')]);
        });
    });
});

