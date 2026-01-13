(function(){

    const scrollHeader = {
        start(){
            const nav = document.querySelector(".header_nav")
            this.vereficarScroll(nav)
        },
        vereficarScroll(nav){
            window.addEventListener("scroll", () => {
                if (window.scrollY > 80) {
                    nav.classList.add("scroll");
                }else {
                    nav.classList.remove("scroll");
                }      
            });
        }
    }
    scrollHeader.start()




})()
