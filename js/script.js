function codificar() {
    var elemento1 = document.getElementById("empty-value");
    elemento1.remove();

    const input = document.createElement("input");
    input.type = "button";
    input.id = "btn-copy";
    input.value = "copiar";
    const fullValue = document.getElementById("full-value");
    fullValue.appendChild(input);

    let textoEntrada = document.getElementById("textoEntrada").value;
    let textoCodificado = codificarTexto(textoEntrada);
    console.log("Texto Codificado:", textoCodificado);
    
    const paragrafo = document.getElementById("text-coded");
    let texto = document.createTextNode(textoCodificado);
    paragrafo.appendChild(texto);

    input.onclick = function() {
        copiarTextoParaAreaDeTransferencia(textoCodificado);
    };
}

function codificarTexto(texto) {
    const regrasSubstituicao = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    let textoCodificado = "";

    for (let char of texto) {
        textoCodificado += regrasSubstituicao[char] || char;
    }

    return textoCodificado;
}

function copiarTextoParaAreaDeTransferencia(texto) {
    const elementoTemporario = document.createElement("textarea");
    elementoTemporario.value = texto;
    
    document.body.appendChild(elementoTemporario);
    elementoTemporario.select();
    
    try {
        document.execCommand("copy");
        alert("Texto copiado com sucesso!");
    } catch (err) {
        console.error("Erro ao copiar texto:", err);
        alert("Erro ao copiar texto. Por favor, copie manualmente.");
    }

    document.body.removeChild(elementoTemporario);
}

function decodificar() {
    var elemento1 = document.getElementById("empty-value");
    elemento1.remove();

    const input = document.createElement("input");
    input.type = "button";
    input.id = "btn-copy";
    input.value = "copiar";
    const fullValue = document.getElementById("full-value");
    fullValue.appendChild(input);

    let textoEntrada = document.getElementById("textoEntrada").value;
    let mensagemDecodificada = decodificarTexto(textoEntrada);
    console.log("Texto Decodificado:", mensagemDecodificada);

    const paragrafo = document.getElementById("text-coded");
    let texto = document.createTextNode(mensagemDecodificada);
    paragrafo.appendChild(texto);

    input.onclick = function() {
        copiarTextoParaAreaDeTransferencia(mensagemDecodificada);
    };
}

function decodificarTexto(mensagemCodificada) {
    let mensagemDecodificada = mensagemCodificada
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');

    return mensagemDecodificada;
}

function copiarTextoParaAreaDeTransferencia(texto) {
    const elementoTemporario = document.createElement("textarea");
    elementoTemporario.value = texto;

    document.body.appendChild(elementoTemporario);
    elementoTemporario.select();

    try {
        document.execCommand("copy");
        alert("Texto copiado com sucesso!");
    } catch (err) {
        console.error("Erro ao copiar texto:", err);
        alert("Erro ao copiar texto. Por favor, copie manualmente.");
    }

    document.body.removeChild(elementoTemporario);
}

