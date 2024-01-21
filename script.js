function generateQRCode() {
    let inputValue = document.getElementById('text-input').value;
    if (inputValue.trim() !== '') {
        let qrcodeContainer = document.getElementById('qrcode-container');
        let qrcodeDiv = document.createElement('div');
        qrcodeDiv.className = 'qrcode';

        let qrcode = new QRCode(qrcodeDiv, {
            text: inputValue,
            width: 128,
            height: 128
        });

        let deleteBtn = document.createElement('div');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.onclick = function () {
            qrcodeContainer.removeChild(qrcodeDiv);
        };

        qrcodeDiv.appendChild(deleteBtn);
        qrcodeContainer.appendChild(qrcodeDiv);

    } else {
        alert('Please enter text or URL.');
    }
}