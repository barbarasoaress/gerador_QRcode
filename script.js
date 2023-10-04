function gerarQRCode() {
    var link = document.getElementById('link').value;
    var qrCodeDiv = document.getElementById('qr-code');
    qrCodeDiv.innerHTML = '';
    var qrcode = new QRCode(qrCodeDiv, {
        text: link,
        width: 256,
        height: 256
    });
    
    // Exiba o botão de download após a geração do QR Code
    var saveButton = document.getElementById('save-button');
    saveButton.style.display = 'block';
    
    // Atualize o botão de download com o link da imagem do QR Code
    saveButton.href = qrCodeDiv.getElementsByTagName('img')[0].src;
}