function gerarQRCode() {
    var link = document.getElementById('link').value;
    var qrCodeDiv = document.getElementById('qr-code');
    qrCodeDiv.innerHTML = '';

    // Resolução mais alta (por exemplo, 300 pixels por polegada)
    var dpi = 100;
    var qrCodeSize = 2.5; // Tamanho em polegadas (exemplo: 2.5 x 2.5 polegadas)

    var qrcode = new QRCode(qrCodeDiv, {
        text: link,
        width: Math.round(dpi * qrCodeSize), // Largura em pixels
        height: Math.round(dpi * qrCodeSize) // Altura em pixels
    });

    // Usar html2canvas para criar uma imagem da div do QR Code
    html2canvas(qrCodeDiv, { dpi: dpi }).then(function(canvas) {
        // Criar um canvas com a borda branca
        var borderWidth = Math.round(0.1 * dpi); // 0.1 polegada de borda
        var borderedCanvasWidth = canvas.width + 2 * borderWidth;
        var borderedCanvasHeight = canvas.height + 2 * borderWidth;

        var borderedCanvas = document.createElement('canvas');
        borderedCanvas.width = borderedCanvasWidth;
        borderedCanvas.height = borderedCanvasHeight;

        var ctx = borderedCanvas.getContext('2d');

        // Preencher o canvas com a borda branca
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, borderedCanvasWidth, borderedCanvasHeight);

        // Desenhar a imagem do QR Code no canvas com a borda branca
        ctx.drawImage(canvas, borderWidth, borderWidth);

        // Converter o canvas com a borda em uma imagem base64 em formato JPEG
        var base64Image = borderedCanvas.toDataURL('image/jpeg', 0.9); // 0.9 é a qualidade, ajuste conforme necessário

        // Exibir o botão de download após a geração do QR Code
        var saveButton = document.getElementById('save-button');
        saveButton.style.display = 'block';

        // Definir o link de download
        saveButton.href = base64Image;
        saveButton.download = 'qrcode.jpg'; // Extensão .jpg para JPEG
    });
}
