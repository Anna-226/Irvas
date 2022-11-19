const timer = (deadline) => {
   const timer = document.querySelector('#timer'),
         days = document.querySelector('#days'),
         hours = document.querySelector('#hours'),
         minutes = document.querySelector('#minutes'),
         seconds = document.querySelector('#seconds');

   function addZero(num) {
      if (num < 10) {
         num = '0'+ num;
      }
      return num;
   }
   
   function getRemainingTime(endTime){
      const remainingTime = Date.parse(endTime) - Date.parse(new Date()),
      remainingDays = Math.floor(remainingTime/1000/60/60/24),
      remainingHours = Math.floor(remainingTime/1000/60/60%24),
      remainingMinutes = Math.floor(remainingTime/1000/60%60),
      remainingSeconds = Math.floor(remainingTime/1000%60);

      let timeObj = {
         d: remainingDays,
         h: remainingHours,
         m: remainingMinutes,
         s: remainingSeconds
      };

      return timeObj;
   }
   function setClock() {
      days.innerHTML = addZero(getRemainingTime(deadline).d);
      hours.innerHTML = addZero(getRemainingTime(deadline).h);
      minutes.innerHTML = addZero(getRemainingTime(deadline).m);
      seconds.innerHTML = addZero(getRemainingTime(deadline).s);
   }
      
   const timerInterval = setInterval(()=> {
      setClock();
   }, 1000);
   
   setClock();
   
   if (Date.parse(deadline) <= Date.parse(new Date())) {
      clearInterval(timerInterval);
      days.innerHTML = '00';
      hours.innerHTML = '00';
      minutes.innerHTML = '00';
      seconds.innerHTML = '00';
   }

};

export default timer;