const nav_btn  = document.querySelector(".line_container")
const nav_items_show = document.querySelector(".nav_links_overlay")
const nav_ul = document.querySelector(".nav_ul")
let body = document.querySelector("body");

nav_btn.addEventListener("click",()=>{
   nav_items_show.classList.toggle("nav_links_overlay_show")

   if(nav_items_show.classList.contains("nav_links_overlay_show")){
      nav_ul.classList.add("nav_ul_hide")
      body.style.overflowY = "hidden";

     
      
   }else{
      nav_ul.classList.remove("nav_ul_hide")
      body.style.removeProperty("overflow-y");
    
   }
})



