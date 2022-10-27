
const unReadMessages=document.querySelectorAll(".unread");
const unread=document.getElementById("notifications");
unread.innerText=unReadMessages.length;

const markAll=document.getElementById("mark_all");
unReadMessages.forEach((Message)=>{
    Message.addEventListener("click",()=>{
        Message.classList.remove("unread")
        const newUnReadMessages=document.querySelectorAll(".unread");
          unread.innerText=newUnReadMessages.length;
    })
})



markAll.addEventListener("click",()=>{
    unReadMessages.forEach((Message)=>{
        Message.classList.remove("unread")
        const newUnReadMessages=document.querySelectorAll(".unread")
        unread.innerText=newUnReadMessages.length
    })
})






































































//markAll.addEventListener("click",()=>{
//     unReadMessages.forEach((message)=>{
//       message.classList.remove("unread")
//     })
//     const newUnReadMessages=document.querySelectorAll(".unread");
//     unread.innerText=newUnReadMessages.length;
    
// })