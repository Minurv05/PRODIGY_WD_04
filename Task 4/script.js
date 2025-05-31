let nav=document.querySelectorAll(".nav-item");

nav.forEach((item)=>{
    item.classList.add("link");

    item.addEventListener('click',()=>{
        const navids=item.textContent.toLowerCase();
        const navid=document.getElementById(navids);

        if(navid){
            navid.scrollIntoView({behavior: "smooth", block:"start"});
        }
    })
})

