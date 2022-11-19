const modal = () => {


   function bindModal(triggerSelector, modalSelector, closeSelector = '.popup_close', closeClickOverlay = true) {
      
      const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            closeBtns = document.querySelectorAll(closeSelector),
            modalWindows = document.querySelectorAll('[data-modal]'),
            scrollbar = calcScrollbar();

      function calcScrollbar() {
         let techDiv = document.createElement('div');
         techDiv.style.width = '50px';
         techDiv.style.height = '50px';
         techDiv.style.overflowY = 'scroll';
         techDiv.style.visibility = 'hidden';
         document.body.append(techDiv);
         let scrollbarWidth = techDiv.offsetWidth - techDiv.clientWidth;
         techDiv.remove();
         return scrollbarWidth;
      }
      
      triggers.forEach(item =>{
         item.addEventListener('click', (e) =>{
            e.preventDefault();
            /* if (modal.getAttribute('data-modal') === 'calc') {
               modal.querySelectorAll('input').forEach(input => {
                  if (!input.value) {
                     input.style.border = '1px solid red';
                  }
               })
            } ДОДЕЛАТЬ!!!!!!*/
            modalWindows.forEach(item => {
               item.style.display = 'none';
            });
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scrollbar}px`;
         });
      });
      
      function closeModal() {
         modalWindows.forEach(item => {
               item.style.display = 'none';
         });
         document.querySelector(modalSelector).style.display = 'none';
         document.body.style.overflow = 'auto';
         document.body.style.marginRight = `0px`;
      }

      closeBtns.forEach(item =>{
         item.addEventListener('click', ()=>{
            closeModal();
         });
      });

      document.addEventListener('click', (e) => {
         if (e.target && e.target === modal && closeClickOverlay) {
            closeModal();
         }
      });

      document.addEventListener('keydown', function (e) {
         if(e.key === 'Escape') {
            closeModal();
         }
      }); 
   }
   function showModalByTime(modalSelector, time) {
      setTimeout(() => {
         document.querySelector(modalSelector).style.display = 'block';
         document.body.style.overflow = 'hidden';
   }, time);
   }
   bindModal('.popup_engineer_btn', '.popup_engineer');
   bindModal('.phone_link', '.popup');
   bindModal('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
   bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
   bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
   showModalByTime('.popup', 3000);
};


export default modal;



