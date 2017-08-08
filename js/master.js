// top notification remove on click
const myNotification = document.querySelector('#notification');
const myNotificationButton = document.querySelector('#notification__button');

myNotificationButton.addEventListener('click', () => {
   notification.style.opacity = "0";
   notification.style.height = "0";
   notification.style.margin = "0";
   notification.style.padding = "0";
   notification.style.transition = "1s";
});

// message validation and submit
const myInputSelectUser = document.querySelector("#inputSelectUser");
const myInputMessage = document.querySelector("#inputMessage");
const myBtnSubmitMessage = document.querySelector("#btnSubmitMessage");

myBtnSubmitMessage.addEventListener('click', (event) => {
   event.preventDefault();
   if (myInputSelectUser.value == "") {
      swal({   title: "Something went wrong",   text: "It seems that you didn't select a user",   type: "error",   confirmButtonText: "Got it" });
   } else {
      if (myInputMessage.value == "") {
         swal({   title: "Something went wrong",   text: "It seems that you didn't write anything in the message",   type: "error",   confirmButtonText: "Got it" });
      } else {
         swal({   title: "Success",   text: "Your message was delivered",   type: "success", timer: "2000" });
         myInputSelectUser.value = "";
         myInputMessage.value = "";
      }
   }
});
