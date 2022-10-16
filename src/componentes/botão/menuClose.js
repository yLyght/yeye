function menuclose(){
    const menutoggle = document.querySelector('.toggle')
    document.getElementById('sideMenu').style.marginRight="-250px";
    document.getElementById('main').style.marginRight="0";
    menutoggle.classList.toggle('active')
}

export default menuclose;