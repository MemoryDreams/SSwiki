let screentext = document.getElementById('screentext').innerHTML;
let buttons = document.getElementsByClassName('answer');
let controlpanel = document.getElementById('controlpanel');

function installSwitcher(val) {
    switch (val) {
        case 'yes':
            break;
        case 'no':
            break;
    }
    removeButtons();
    addButton('that worked', 'yes');
    addButton('that worked too', 'no');
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
    button.setAttribute("onclick", "installSwitcher('" + val + "')");
    controlpanel.appendChild(button);
}

function helpWithInstall() {

}