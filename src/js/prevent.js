export function init() {

 const preventReloadLinks = document.querySelectorAll('.leftnav-link');
 preventReloadLinks.forEach(link => {
  link.addEventListener('click', function (e) {
e.preventDefault()
return false
  });
 })

};
