function openImage(img) {
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    var fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.style.maxWidth = '90%';
    fullImg.style.maxHeight = '90%';

    overlay.appendChild(fullImg);
    
    overlay.onclick = function() {
        document.body.removeChild(overlay);
    };

    document.body.appendChild(overlay);
}



var modal = document.getElementById("myModal");
var btn = document.getElementById("openFormBtn");
var span = document.getElementsByClassName("close")[0];
var submitBtn = document.getElementById("submitBtn");

// Открываем модальное окно при нажатии на кнопку
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем модальное окно при нажатии на крестик
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при нажатии за его пределами
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Действие при нажатии на кнопку отправить
submitBtn.onclick = function() {
    var fullName = document.getElementById("fullName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    
    // Делаем что-то с введенными данными (например, выводим их)
    console.log("ФИО:", fullName);
    console.log("Номер телефона:", phoneNumber);
}