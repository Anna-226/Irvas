
import checkNumInput from "./checkNumInput";

const changeModalState = (state) => {
   const windowShape = document.querySelectorAll('.balcon_icons_img > img'),
         windowWidth = document.querySelectorAll('#width'), 
         windowHeight = document.querySelectorAll('#height'),
         windowType = document.querySelectorAll('#view_type'),
         windowProfile = document.querySelectorAll('.checkbox'); 
   
   windowShape.forEach((item, i) => {
      item.addEventListener('click', () => {
         state.shape = i;
         console.log(state);
      });
   });

   checkNumInput('#width');
   checkNumInput('#height');

   windowWidth.forEach((item) => {
      item.addEventListener('input', () => {
         state.width = item.value;
         console.log(state);
      });
   });

   windowHeight.forEach((item) => {
      item.addEventListener('input', () => {
         state.height = item.value;
         console.log(state);
      });
   });
   
   windowType.forEach((item) => {
      item.addEventListener('change', () => {
         state.type = item.value;
         console.log(state);
      });
   });
   windowProfile.forEach((item, i) => {
      item.addEventListener('change', () => {
         windowProfile.forEach(box => {
            box.checked = false;
         });
         item.checked = true;
         i == 0 ? state.profile = "холодное" : state.profile = "теплое";
         console.log(state); 
      });
   });
};

export default changeModalState;