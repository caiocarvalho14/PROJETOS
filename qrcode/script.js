var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "caiocarvalho.dev.br",
    width: 333,
    height: 333,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

function atualizarQRCode() {
    const container = document.getElementById("qrcode");
    container.innerHTML = "";

    const texto = document.getElementById("text-input").value;
    if (!texto) {
        alert("Digite uma URL");
        return;
    }

    qrcode = new QRCode(container, {
        text: texto,
        width: 333,
        height: 333
    });
    setTimeout(() => {
        const img = container.querySelector("img") || container.querySelector("canvas");
        if (img) {
            img.addEventListener("click", () => copiarQRCodeParaClipboard(img));
        }
    }, 500);
}

async function copiarQRCodeParaClipboard(elemento) {
    try {
        let blob;
        if (elemento.tagName === "IMG") {
            const response = await fetch(elemento.src);
            blob = await response.blob();
        } else if (elemento.tagName === "CANVAS") {
            blob = await new Promise(resolve => elemento.toBlob(resolve));
        }

        await navigator.clipboard.write([
            new ClipboardItem({ [blob.type]: blob })
        ]);

        alert("QR Code copiado para a área de transferência!");
    } catch (err) {
        console.error(err);
        alert("Erro ao copiar QR Code.");
    }
}