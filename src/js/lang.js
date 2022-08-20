let arrLang = {
    'eng': {
        'menuMain': 'Home',
        'menuAbout': 'About',
        'menuWorks': 'My works',
        'menuSocial': 'Social',
    },
    'ru': {
        'menuMain': 'Главная',
        'menuAbout': 'Обо мне',
        'menuWorks': 'Работы',
        'menuSocial': 'Контакты',
    },
};


$('.main__btn').each(function() {
    $(this).click(function(item, i){
        $('.main__btn').toggleClass('main__btn_black')
        let lang = $(this).attr('id');
        
        $('.lang').each(function() {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});

