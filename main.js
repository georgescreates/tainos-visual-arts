function navigating(){
    var linkToCollapse = document.querySelectorAll('.link-to-collapse');
    var collapsedList = document.querySelectorAll('.menu-sub-links');

    for(let i = 0; i < linkToCollapse.length; i++){
        linkToCollapse[i].addEventListener('click', () => {
            collapsedList[i].classList.toggle('collapsed');
            for(let j = 0; j != i; j++){
                collapsedList[j].classList.remove('collapsed');
            }
            for(let k = linkToCollapse.length - 1; k != i; k--){
                collapsedList[k].classList.remove('collapsed');
            }
        });
    }

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-button');
    const mobileNavBar = document.getElementById('nav-mobile');

    hamburgerBtn.addEventListener('click', () => {
        mobileNavBar.classList.toggle('active');
    })

    closeBtn.addEventListener('click', () => {
        mobileNavBar.classList.toggle('active');
    })

    var mobLinkToCollapse = document.querySelectorAll('.mobile-link-to-collapse');
    var mobCollapsedList = document.querySelectorAll('.mobile-collapsed-links-list');

    for(let i = 0; i < mobLinkToCollapse.length; i++){
        mobLinkToCollapse[i].addEventListener('click', () => {
            mobCollapsedList[i].classList.toggle('collapsed');
            for(let j = 0; j != i; j++){
                mobCollapsedList[j].classList.remove('collapsed');
            }
            for(let k = linkToCollapse.length - 1; k != i; k--){
                mobCollapsedList[k].classList.remove('collapsed');
            }
        })
    }
}
navigating();

function slider(){
    const sliderBtns = document.querySelectorAll('.controller-btn');
    const persona = document.querySelectorAll('.persona-div');
    var indicator = 1;

    sliderBtns[1].classList.add('disabled');

    // le itilizate a klike sou bouton pou li ale a goch - avanse nan slide lan
    sliderBtns[0].addEventListener('click', () => {
        indicator++;

        

        for(let i = 0; i < persona.length; i++){
            persona[i].style.transform = "translateX(-"+(indicator-1)*105+"%)";
        }

        sliderBtns[1].classList.remove('disabled');
        if(indicator >= 6){
            sliderBtns[0].classList.add('disabled');
        }

        // animasyon sou slide lan
        persona[indicator-1].classList.add('active');
        for(let j = 0; j != (indicator-1); j++){
            persona[j].classList.remove('active');
        }
        for(let k = persona.length - 1; k != (indicator-1); k--){
            persona[k].classList.remove('active');
        }
    })

    // le itilizate a klike sou bouton pou li ale a dwat - rekile nan slide lan
    sliderBtns[1].addEventListener('click', () => {
        indicator--;

        for(let i = 0; i < persona.length; i++){
            persona[i].style.transform = "translateX(-"+(indicator-1)*105+"%)";
        }

        sliderBtns[0].classList.remove('disabled');
        if(indicator <= 1){
            sliderBtns[1].classList.add('disabled');
        }

        // animasyon sou slide lan
        persona[indicator-1].classList.add('active');
        for(let j = 0; j != (indicator-1); j++){
            persona[j].classList.remove('active');
        }
        for(let k = persona.length - 1; k != (indicator-1); k--){
            persona[k].classList.remove('active');
        }
    })



    // if(indicator >= 6){
    //     sliderBtns[0].classList.add('disabled');
    // }else{
    //     sliderBtns[0].classList.remove('disabled');
    // }

    // else{
    //     sliderBtns[1].classList.remove('disabled');
    // }
}
slider();


// function galery(){
//     var peoples = document.querySelectorAll(".who-galery-photo");
//     const galery = document.querySelector('.who-galery');

//     for(let i = 0; i < peoples.length; i++){
//         peoples[i].addEventListener('mouseover', () => {
//             if(i == 0){
//                 galery.style.gridTemplateColumns = "5fr 1fr 1fr 1fr 1fr";
//             }
//             if(i == 1){
//                 galery.style.gridTemplateColumns = "1fr 5fr 1fr 1fr 1fr";
//             }
//             if(i == 2){
//                 galery.style.gridTemplateColumns = "1fr 1fr 5fr 1fr 1fr";
//             }
//             if(i == 3){
//                 galery.style.gridTemplateColumns = "1fr 1fr 1fr 5fr 1fr";
//             }
//             if(i == 4){
//                 galery.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 5fr";
//             }
//         })
//         peoples[i].addEventListener('mouseleave', () => {
//             galery.style.gridTemplateColumns = "1fr 1fr 5fr 1fr 1fr";
//         })
//     }
// }
// galery();