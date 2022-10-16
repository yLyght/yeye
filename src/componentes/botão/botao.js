 function menutoggle(){
    const menutoggle = document.querySelector('.toggle')
    document.getElementById('sideMenu').style.marginRight="0";
    document.getElementById('main').style.marginRight="250px";
    menutoggle.classList.toggle('active') 
}

export default menutoggle;