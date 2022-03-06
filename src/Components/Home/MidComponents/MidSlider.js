
export const handleClick = (arg) => {
    const firstimg = document.querySelector('#firstimg');
    const secondimg = document.querySelector('#secondimg');
    const thirdimg = document.querySelector('#thirdimg');

    if(arg === 0){
        firstimg.style.marginLeft = '0%';
        firstimg.style.transition = 'margin-left 1s';
    }
    else if(arg === 1){
        firstimg.style.marginLeft = '-100%';
        firstimg.style.transition = 'margin-left 1s';
    }
    else if(arg === 2){
        secondimg.style.marginLeft = '0%';
        secondimg.style.transition = 'margin-left 1s';
    }
    else if(arg === 3){
        secondimg.style.marginLeft = '-100%';
        secondimg.style.transition = 'margin-left 1s';
    }
    else if(arg === 4){
        thirdimg.style.marginLeft = '0%';
        thirdimg.style.transition = 'margin-left 1s';
    }
    else if(arg === 5){
        thirdimg.style.marginLeft = '-100%';
        thirdimg.style.transition = 'margin-left 1s';
    }
}
