document.addEventListener('DOMContentLoaded', () => { 
	
const header = document.querySelector('.header') 
    
	const onScrollHeader = () => { 
  
      let prevScroll = window.pageYOffset
      let currentScroll 
  
      window.addEventListener('scroll', () => {  

        currentScroll = window.pageYOffset  

        const headerHidden = () => header.classList.contains('header_out')   

        if (currentScroll > prevScroll && !headerHidden()) { 
          header.classList.add('header_out') 
        }
        if (currentScroll < prevScroll && headerHidden()) { 
          header.classList.remove('header_out')
        }  
        prevScroll = currentScroll  
      })
    }
    onScrollHeader() 


/// Модальные окна 

	const popup = document.querySelectorAll('.popup');
	const popupTest = document.querySelector('.js-popupTest');
	const iconTest = document.querySelector('.js-test');
	const popupClose = document.querySelector('.js-popupClose');


	iconTest.addEventListener("click", function() {
		popupTest.classList.add('popup_active');
		header.classList.add('header_out');
	});	

	popupClose.addEventListener('click', function(){
		popup.forEach((item) => {
			item.classList.remove('popup_active');
			console.log(this)
		});
	});



});



