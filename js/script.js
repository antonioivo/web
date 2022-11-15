let fotoAtual = 1;
// A variável a seguir armazena o caminho das imagens.
const c = "imagens/foto";

// Valores dos títulos e parágrafos das fotos.
const t1 = "Reunião dos programadores";
const p1 = "Lorem ipsum dolor sit amet consectetur. Pharetra phasellus dapibus viverra egestas fusce ornare vestibulum. Pharetra viverra ipsum sagittis cursus id sed ridiculus.";

const t2 = "Notbook leve e proderoso";
const p2 = "Lorem ipsum dolor sit amet consectetur. Scelerisque morbi adipiscing venenatis eu tristique. Orci auctor praesent sed risus ut nam nisl.";

const t3 = "Efeito Matrix - como fazer";
const p3 = "Lorem ipsum dolor sit amet consectetur. Volutpat nunc in cursus nunc. Eget ultrices nisl enim elit ac aliquet nam enim ut.";

const t4 = "Novas tecnologias";
const p4 = "Lorem ipsum dolor sit amet consectetur. Ut diam accumsan sodales vel amet aenean. Ut nulla dictum donec ac sed leo.";

const t5 = "Robos domésticos";
const p5 = "Lorem ipsum dolor sit amet consectetur. Morbi aliquam posuere sed eget nulla eu sed. Nam id sem porta mi a in odio tellus.";

const t6 = "Programação industrial";
const p6 = "Lorem ipsum dolor sit amet consectetur. Integer lacus cras arcu vitae. Nullam posuere non risus nulla ultricies pharetra lacus sit quisque.";

//Avança para a próxima foto.
function trocaFoto(botao){

    if(botao == "avancar"){
        if(fotoAtual < 6){
            proximoNumero = fotoAtual + 1;
            document.getElementById("retoceder").style.visibility = "visible";
        }
        else{
            document.getElementById("avancar").style.visibility = "hidden";
        }
    }
    else{
        if(fotoAtual > 1){
            proximoNumero = fotoAtual - 1;
            document.getElementById("avancar").style.visibility = "visible";
        }
        else{
            document.getElementById("retoceder").style.visibility = "hidden";
        }
    }
   
    // cc armazena o caminho completo da foto a ser exibida.
    cc = c + proximoNumero + ".png";
    document.getElementById("tela").src = cc;
    fotoAtual = proximoNumero;


    trocaTextos();

    console.log(cc);
}

// Troca os textos do título e dos parágrafos.
function trocaTextos(){

    switch(fotoAtual){
        case 1:
            document.getElementById("titulo").innerHTML = t1;
            document.getElementById("descricao").innerHTML = p1;
            document.getElementById("pagina").style.backgroundColor = "#FFFFFF";
            break;
        case 2:
            document.getElementById("titulo").innerHTML = t2;
            document.getElementById("descricao").innerHTML = p2;
            document.getElementById("pagina").style.backgroundColor = "#FEE3FF";
            break;
        case 3:
            document.getElementById("titulo").innerHTML = t3;
            document.getElementById("descricao").innerHTML = p3;
            document.getElementById("pagina").style.backgroundColor = "#FFF0BD";
            break;
        case 4:
            document.getElementById("titulo").innerHTML = t4;
            document.getElementById("descricao").innerHTML = p4;
            document.getElementById("pagina").style.backgroundColor = "#E7D5FF";
            break;
        case 5:
            document.getElementById("titulo").innerHTML = t5;
            document.getElementById("descricao").innerHTML = p5;
            document.getElementById("pagina").style.backgroundColor = "#D6FFBD";
            break;
        case 6:
            document.getElementById("titulo").innerHTML = t6;
            document.getElementById("descricao").innerHTML = p6;
            document.getElementById("pagina").style.backgroundColor = "#C9CFFF";
            break;
    }

}