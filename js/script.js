document.addEventListener('DOMContentLoaded', () => { 

// const header = document.querySelector('.header') 
    
// 	const onScrollHeader = () => { 
  
//       let prevScroll = window.pageYOffset
//       let currentScroll 
  
//       window.addEventListener('scroll', () => {  

//         currentScroll = window.pageYOffset  

//         const headerHidden = () => header.classList.contains('header_out')   

//         if (currentScroll > prevScroll && !headerHidden()) { 
//           header.classList.add('header_out') 
//         }
//         if (currentScroll < prevScroll && headerHidden()) { 
//           header.classList.remove('header_out')
//         }  
//         prevScroll = currentScroll  
//       })
//     }
//     onScrollHeader() 


/// Модальные окна 

	const popup = document.querySelectorAll('.popup');
	const popupTest = document.querySelector('.js-popupTest');
  	const popupFitness = document.querySelector('.js-popupFitness');
	const iconFitness = document.querySelector('.js-iconFitness');
 	const iconTest = document.querySelector('.js-test');
	const popupClose = document.querySelectorAll('.js-popupClose');


	iconTest.addEventListener("click", function() {
		popupTest.classList.add('popup_active');
		document.body.style.overflow = 'hidden';
	});	
	
  	iconFitness.addEventListener("click", function() {
		popupFitness.classList.add('popup_active');
		document.body.style.overflow = 'hidden';
	});	

	popupClose.forEach((item) => {
    item.addEventListener('click', function(){
		document.body.style.overflow = '';
        popup.forEach((i) => {
          i.classList.remove('popup_active');
        });
      });
  })
  
  



});



