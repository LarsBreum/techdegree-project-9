var notification = document.querySelector('#notification');
var notificationButton = document.querySelector('#notification__button');

notificationButton.addEventListener('click', () => {
   notification.style.opacity = "0";
   notification.style.height = "0";
   notification.style.margin = "0";
   notification.style.padding = "0";
   notification.style.transition = "1s";
});
