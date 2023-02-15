 function showPopup() {
    
    document.querySelector('.popup').style.display = 'block';
        setTimeout(function () {
            window.location.href = "../index.html"
            document.querySelector('.popup').style.display = 'none';
    
        }, 2500)
    
}
window.onload = showPopup;