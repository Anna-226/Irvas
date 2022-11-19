const tabs = (headerSelector, tabSelector, tabContentSelector, activeClass, display = 'block') => {
   
   const header = document.querySelector(headerSelector),
         tabs = document.querySelectorAll(tabSelector),
         tabContent = document.querySelectorAll(tabContentSelector);
  
   function tabHide() {
      tabs.forEach(item => {
         item.classList.remove(activeClass);
      });
      tabContent.forEach(item => {
         item.style.display = 'none';
      });
   }
   function tabShow(i = 0) {
      tabs[i].classList.add(activeClass);
      tabContent[i].style.display = display;
   }
   tabHide();
   tabShow();
   header.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.closest(tabSelector)) {
         tabs.forEach((item, i) => {
            if (item == target || target.closest(tabSelector) == item) {
               tabHide();
               tabShow(i);
            }
         });
      }
   });
};

export default tabs;