
function carregar() {
    let msg = window.document.getElementById("msg")
    let minu = window.document.getElementById("minu")
    let img = window.document.getElementById("imagem")
    let data0 = new Date()
    let hora = data0.getHours()
    let data1 = new Date()
    let minuto = data1.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas`
    minu.innerHTML = `e ${minuto} minutos`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = "manha.png"
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = "tarde.png"
        document.body.style.background = "#b9846f"
    } else {
        //boa noite
        img.src = "noite.png"
        document.body.style.background = "#515154"
    }
}