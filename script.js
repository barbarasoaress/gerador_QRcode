function gerarQRCode() {
    var link = document.getElementById('link').value;
    var qrCodeDiv = document.getElementById('qr-code');
    qrCodeDiv.innerHTML = '';

    var qrcode = new QRCode(qrCodeDiv, {
        text: link,
        width: 256,
        height: 256
    });

    // Adicionar margens à imagem do QR Code
    var qrCodeImage = qrCodeDiv.getElementsByTagName('img')[0];
    qrCodeImage.style.margin = '20px'; // Altere a margem conforme necessário

    // Exibir o botão de download após a geração do QR Code
    var saveButton = document.getElementById('save-button');
    saveButton.style.display = 'block';
    saveButton.href = qrCodeImage.src;
}
