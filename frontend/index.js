function menushow(){
    let menuMobile = document.querySelector(mobile-menu);
    if(menuMobile.classList.contains(open)){
        menuMobile.classList.remove(open);
        document.querySelector(icon).scr /img/close_with_36dp.svg;
    } else{
        menuMobile.classList.add(open)
        document.querySelector(icon).scr /img/close_with_36dp.svg;
    }
}