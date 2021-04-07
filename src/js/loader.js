
export function init(container){


 const loader = container.querySelector('.loader');
 window.addEventListener('load',fade);
 function fade(){
  loader.classList.add('loader-fade')
 };

}
