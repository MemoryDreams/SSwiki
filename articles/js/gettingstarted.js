let screentext = document.getElementById('screentext');
let buttons = document.getElementsByClassName('answer');
let controlpanel = document.getElementById('controlpanel');

function installSwitcher(val) {
    switch (val) {
        case 'yes':
            break;
        case 'no':
            helpWithInstall();
            break;
    }
}

function removeButtons() {
    let i = 0;
    for (i = 0; i <= buttons.length; i++) {
        document.getElementById('controlpanel').querySelector('button').remove();
    }
}

function addButton(text, val) {
    let button = document.createElement('button');
    button.className = 'answer';
    button.innerHTML = text;
    button.setAttribute("onclick", val);
    controlpanel.appendChild(button);
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function addLink(img, destination) {
    let button = document.createElement('button');
    button.className = 'answer';
    button.setAttribute('href', destination);
    button.setAttribute("onclick", "openInNewTab('" + destination + "')");
    let image = document.createElement('img');
    image.setAttribute('src', img);
    button.appendChild(image);
    controlpanel.appendChild(button);
}

function helpWithInstall() {
    screentext.innerHTML = "Для начала Вам нужно скачать лаунчер. Нажмите на кнопку с иконкой внизу, чтобы перейти на официальный сайт Byond.<br><br>Пока Вы там, нажмите кнопку 'Register' сверху и заведите аккаунт.<br><br>По возможности стоит воздержаться от использования сервиса Mail.ru."
    removeButtons();
    addLink('../images/BYOND_logo_big.png', 'https://www.byond.com/download/');
    addButton("Готово! Что дальше?", 'letsBegin()')
}

function letsBegin() {

}