// funcão para validação de email
function validaLogin() {
    let grupoEmail = ["newtcriz@gmail.com", 123789456]; // Email e senhas válidos para acesso
    let grupoSenha = ["Pass123"];
    let email = document.getElementById('email').value; // coleta email digitado no input
    let senha = document.getElementById('passwd').value; // coleta senha digitada no input
    // verifica se login e senha estão no array
    if(email == grupoEmail[0] || email == grupoEmail[1] && senha == grupoSenha[0]){
        window.location = "src/index.html";// caso seja verdadeiro, vai para a próxima página
    }else{
        document.querySelector('.msg-erro').style.display = 'flex';
        setInterval(function () {
            document.querySelector('.msg-erro').style.display = 'none';
        }, 4000);
    }
}   


function validaLogin2() {
    let grupoEmail = ["mariasilva@unicesumar.edu.br"]; // Email e senhas válidos para acesso
    let grupoSenha = ["UniC987"];
    let email = document.getElementById('email').value; // coleta email digitado no input
    let senha = document.getElementById('passwd').value; // coleta senha digitada no input
    // verifica se login e senha estão no array
    if(email == grupoEmail[0] || email == grupoEmail[1] && senha == grupoSenha[0]){
        window.location = "index.html";// caso seja verdadeiro, vai para a próxima página
    }else{
        document.querySelector('.msg-erro').style.display = 'flex';
        setInterval(function () {
            document.querySelector('.msg-erro').style.display = 'none';
        }, 4000);
    }
}  



// função para cópia de código do QR code
function qrcode() {
    let textoCopiado = document.getElementById('copiarQR');
    textoCopiado.innerText = 'código copiado!!!' // escreve "codigo copiado" no span
}