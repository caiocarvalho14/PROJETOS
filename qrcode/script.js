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

    let cord = document.getElementById("cord").value
    let corl = document.getElementById("corl").value
    console.log(cord+corl)
    const texto = document.getElementById("text-input").value;
    if (!texto) {
        alert("Digite uma URL");
        qrcode = new QRCode(container, {
        text: "caiocarvalho.dev.br",
        colorDark: cord,
        colorLight: corl,
        width: 333,
        height: 333
    });
        return;
    }
    qrcode = new QRCode(container, {
        text: texto,
        colorDark: cord,
        colorLight: corl,
        width: 333,
        height: 333
    });
    alert("Qr code gerado com sucesso!")
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
function download() {
    const container = document.getElementById("qrcode");
    const img = container.querySelector("img");
    const canvas = container.querySelector("canvas");

    let urlImagem;

    if (img) {
        urlImagem = img.src;
    } else if (canvas) {
        urlImagem = canvas.toDataURL("image/png");
    } else {
        alert("QR Code não encontrado.");
        return;
    }

    const link = document.createElement("a");
    link.href = urlImagem;
    link.download = "qrcode.png";
    link.click();
}
