const gallery = () => {
   const worksSection = document.querySelector('.works'),
         previews = document.querySelectorAll('.works img'),
         imagePopup = document.createElement('div'),
         bigImg = document.createElement('img');

        // imagePopup.classList.add('popup'); //поменять класс
         worksSection.append(imagePopup);
         imagePopup.style.justifyContent = 'center';
         imagePopup.style.alignItems = 'center';
         imagePopup.style.display = 'none';
         imagePopup.append(bigImg);
   previews.forEach(item => {
      item.addEventListener('click', (e) => {
         e.preventDefault();
         imagePopup.style.display = 'flex';
         const srcBigImg = e.target.parentNode.getAttribute('href');
         bigImg.setAttribute('src', srcBigImg);
      })
   });
   worksSection.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('galley-popup')) {
         imagePopup.style.display = 'none';
      }
   })
};
export default gallery;