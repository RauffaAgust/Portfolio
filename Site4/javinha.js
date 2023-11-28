function clickMenu() {
    if (itensMenu.style.display == 'block') {
        itensMenu.style.display = 'none'
    } else {
        itensMenu.style.display = 'block'
    } 
    if (iconMenu.style.borderRadius == '0px 13px 0px 0px') {
        iconMenu.style.borderRadius = '0px'
    } else {
        iconMenu.style.borderRadius = '0px 13px 0px 0px'
    }
}
