import imagenPollo from "./images/ASADO_FAMILIAR.png"

const inicioFunctionTab = (() =>{

    const create = ()=>{
        erase();
        const inicioContent = document.createElement("div");
        inicioContent.setAttribute('id', 'tabContent');
        const pollito = new Image();
        pollito.src = imagenPollo;

        inicioContent.innerHTML = `Bienvenido a Kokoriko, \r\n
                            donde encuentras el mejor pollo del pais\r\n`
        inicioContent.appendChild(pollito);
        inicioContent.innerHTML +=`\r\nDel campo a tu mesa`;
        inicioContent.setAttribute('style', 'white-space: pre-line');
        content.appendChild(inicioContent);
        };
        
    const erase = () => {
        if (!!document.getElementById("tabContent")){
        const inicioContent = document.getElementById("tabContent");
        content.removeChild(inicioContent);
        };
    }

    
    return {create , erase}
})()

export {inicioFunctionTab}