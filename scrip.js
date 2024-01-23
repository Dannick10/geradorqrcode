"use strict";
const qrImg = document.querySelector('#qrimg');
const qrcodeContain = document.querySelector('.qrcodecontain');
let qrString = '';
function img() {
    qrImg?.setAttribute('src', 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrString);
    
}
document.querySelector('#btn_generator')?.addEventListener('click', () => {
    const inputElement = document.querySelector('#txt_input');
    if (inputElement) {
        qrString = inputElement.value;
        console.log(qrString);
        img();
    }
    else {
        return;
    }
});
