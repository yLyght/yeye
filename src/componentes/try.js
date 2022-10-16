function scaleBasedOnWindow(elm, scale=1, fit=false){
    if(!fit){
        elm.style.transform='scale('+scale/Math.min(elm.clientWidth/window.innerWidth,elm.clientHeight/window.innerHeight)+')';
    }else{
        elm.style.transform='scale('+scale/Math.max(elm.clientWidth/window.innerWidth,elm.clientHeight/window.innerHeight)+')';
    }
}

export default scaleBasedOnWindow