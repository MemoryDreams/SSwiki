let screentext = document.getElementById('screentext').innerHTML;
let buttons = document.getElementsByClassName('answer');

function installSwitcher(val) {
    switch (val) {
        case 'yes':
            break;
        case 'no':
            break;
    }
}

function removeButtons() {
    let i = 0;
    for (i = 0; i <= buttons.length; i++) {
        document.getElementById('controlpanel').querySelector('button').remove();
    }
}