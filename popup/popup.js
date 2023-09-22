const btn = document.querySelector(".catch-btn");
const title = document.querySelector(".title")

btn.addEventListener('click', async()=>{
    let[tab] = await chrome.tabs.query({active:true, currentWindow:true})
    console.log(tab)
    console.log(tab.title)
    title.innerHTML=`<h3>${tab.title}</h3>`
})