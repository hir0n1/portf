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


$(function() {
    $('.translate').click(function(){
        let lang = $(this).attr('id');
        
        $('.lang').each(function(){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});

