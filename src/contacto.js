import imgCombo8Presas from "./images/ochopresas.png";
import imgWhatsapp from "./images/whatsapp-icon.png";
import { menuFunctionTab } from "./menu";
import chiFace from "./images/chickenFace.png"

const contactoFunctionTab = (() =>{
    const create = ()=>{
        erase();
        const contactoContent = document.createElement("div");
        contactoContent.setAttribute('id', 'tabContent');
        
        const pideWhatsapp = document.createElement("div");
        const combo8Presas = new Image();
        combo8Presas.src = imgCombo8Presas;
        const domicilioTitulo = document.createElement("h3");
        const whatsappPng = new Image();
        whatsappPng.src = imgWhatsapp;
        const bannerRight = document.createElement("div");
        domicilioTitulo.innerHTML="DOMICILIOS:\r\n";
        domicilioTitulo.appendChild(whatsappPng);
        domicilioTitulo.innerHTML += "+57 300 410 0111";
        const fraseRico = document.createElement("p");
        fraseRico.textContent = "NADA MÁS RICO\r\nQUE COMER EN KOKORIKO"
        const pideBtn = document.createElement("button");
        pideBtn.addEventListener("click",menuFunctionTab.create);
        pideBtn.innerText = "PIDE AQUI";
        bannerRight.appendChild(domicilioTitulo);
        bannerRight.appendChild(fraseRico);
        bannerRight.appendChild(pideBtn);
        pideWhatsapp.appendChild(combo8Presas);
        pideWhatsapp.appendChild(bannerRight);
        contactoContent.appendChild(pideWhatsapp);

        const restaurants = [
            [
                "AEROPUERTO",
                "Edificio crespo 70Cartagena, Bolívar",
                "6628111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "AEROPUERTO ALFONSO B.",
                "Aeropuerto Alfonso Bonilla AragonPalmira, Valle del Cauca",
                "2727724",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "AL PASO CALLE 71",
                "Calle 71 #9-06Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "ARMENIA I",
                "Carrera 14 #10-85Armenia, Quindio",
                "7469920",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "ARMENIA II",
                "Carrera 14 #16-58Armenia, Quindio",
                "7469920",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "AV VENEZUELA",
                "Calle 33 #9-64Cartagena, Bolívar",
                "6628111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "BOCAGRANDE",
                "Carrera 2 #8-13Cartagena, Bolívar",
                "6628111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "BOSQUE",
                "Diagonal 21 #45A-19Cartagena, Bolívar",
                "6628111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "BUENAVENTURA",
                "Calle 2 #2-05Buenaventura, Valle del Cauca",
                "6028881111",
                " 11:00 AM - 10:00 PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "BUENAVISTA",
                "Calle 29a #9A-14Santa Marta, Magdalena",
                "4220111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "BUENAVISTA",
                "Centro Comercial BuenavistaBarranquilla, Atlántico",
                "3571121",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CAFAM FLORESTA",
                "Avenida Carrera 68 #96-50Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CALLE 125",
                "Avenida 19 #125-17Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CAPITAL TOWER",
                "Avenida Calle 24 #51-40Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CC Los molinos",
                "Calle 30A # 82A-26Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CC Puerta del norte",
                "Diagonal 55 #34-67Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CC San diego",
                "Calle 33 #42B-06Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CC Santafé",
                "Carrera 43A #7-117Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CC Unicentro",
                "Carrera 66B #43A-76Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CENTRO",
                "Carrera 6 #10-41Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CENTRO CHIA",
                "Avenida Pradilla #9-00 EsteBogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CITYPLAZA",
                "Calle 36D SUR #27A-105Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CIUDAD 2000",
                "Carrera 68 #25-12Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "COLINA CAMPESTRE",
                "Calle 138 #55-85Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "COLON",
                "Carrera 1 Calle 61a-30Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CORFERIAS",
                "Carrera 37 #24-67Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CRESPO",
                "Calle 70 #1D-11Cartagena, Bolívar",
                "6628111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Cucuta Aventura",
                "Aventura PlazaCúcuta, Norte de Santander",
                "5756671",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "EL PROGRESO",
                "Carrera 16 #38-130Dosquebradas, Risaralda",
                "3242400",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "ENVIGADO",
                "Carrera 42 #38S-56Envigado, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "FERIA EXPOSICION",
                "Avenida Calle 24 #36-09Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "FONTANAR",
                "Avenida Cajica #143-78Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "FONTIBON",
                "Carrera 100 #20C-32Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "GALERIAS",
                "Carrera 24 # 52-85Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "GIRARDOT",
                "Calle 20 #10-27Girardot, Cundinamarca",
                "8330206",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "HOMECENTER  170",
                "Carrera 45 #175-50Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "HOMECENTER  80",
                "Avenida 68 #80-70Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "IBAGUÉ I",
                "Carrera 3 #11A-43Ibagué, Tolima",
                "2655111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "IBAGUÉ II",
                "Carrera 5 #43-55Ibagué, Tolima",
                "2655111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "ILARCO",
                "Avenida Suba #114A-88Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Itagui",
                "Carrera 50 #50-68Itagui, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "JARDIN PLAZA",
                "Carrera 98 #16-200Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "KENNEDY",
                "Carrera 78B #38b-02 SurBogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "LAGO",
                "Calle 24 #7-29Pereira, Risaralda",
                "3242400",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "LAS VILLAS",
                "Calle 128A #54-50Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Laureles",
                "Carrera 76 #33A-35Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "LIDO",
                "Calle 5 #45-20Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "MELGAR",
                "Calle 5 BIS #25A-30Melgar, Tolima",
                "2450246",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "MERCED",
                "Avenida 3 Norte #47C-06Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "MULTIDRIVE",
                "Carrera 59 #152B-75Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "OBELISCO",
                "Carrera 74 #48-53Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Oriental",
                "Carrera 46 #49A-43Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "PALATINO",
                "Carrera 7 #139-09Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "PALMIRA",
                "Calle 30 #30-72Palmira, Valle del Cauca",
                "6028881111",
                " 11:00 AM - 10:00 PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "PANCE",
                "Calle 18 #121-451Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "PARQUE 43",
                "Calle 42 #9-85Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "PASEO BOLIVAR",
                "Avenida 4N #10N-130Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Poblado",
                "Carrera 36 #10-62Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "PUENTE AEREO",
                "Calle 26 #106-28Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "RESTREPO",
                "Calle 16 #18-44 SurBogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Rionegro",
                "Calle 43 #54-139Rionegro, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "RODADERO",
                "Calle 6 #1-64Santa Marta, Magdalena",
                "4220111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "SALITRE PLAZA",
                "Carrera 68B #40-39Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "SAN DIEGO",
                "Carrera 7 #24-02Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "SANCANCIO",
                "Carrera 27A #66-30Manizales, Caldas",
                "8876790",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "SANTA ISABEL",
                "Carrera 27 #1C-14Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Terminal",
                "Carrera 64C #78-440Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "TUNJA",
                "Calle 42A #1ATunja, Boyacá",
                "3144530309",
                " 11:00 AM - 10:00 PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "UNIABASTOS",
                "UniabastosCota, Cundinamarca",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "UNICENTRO",
                "Carrera 15 #124-30Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Unicentro pereira",
                "Avenida 30 De Agosto #75-51Pereira, Risaralda",
                "3242400",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "USAQUEN",
                "Calle 119 #7-54Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "VILLA ALSACIA",
                "Calle 12B #71d-61Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "VILLAVICENCIO  CENTRO",
                "Calle 38 #30a-88Villavicencio, Meta",
                "6821111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "VIVA VILLAVICENCIO",
                "Calle 7 #45-185Villavicencio, Meta",
                "6821111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "YOPAL",
                "Carrera 29 #14-47Yopal, Casanare",
                "6333100",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ]
        ]
        
        const restaurantsDiv = document.createElement("div");
        const restauransList = document.createElement("div");
        const restaurantMap = document.createElement("div");
        const chickenFace = new Image();
        chickenFace.src = chiFace;
        // const calendar = new Image();
        // calendar.src = chiFace;
        // const phone = new Image();
        // phone.src = chiFace;
        // const clock = new Image();
        // clock.src = chiFace;
        for (const restaurant of restaurants){
            const restaurantCard = document.createElement("div");
            const restaurantInfo = document.createElement("div");
            const restaurantName = document.createElement("div");
            const restaurantAdress = document.createElement("div");
            const restaurantPhone = document.createElement("div");
            const restaurantHours = document.createElement("div");
            const restaurantDays = document.createElement("div");
            restaurantName.textContent = restaurant[0];
            restaurantAdress.textContent = restaurant[1];
            restaurantPhone.textContent = restaurant[2];
            restaurantHours.textContent = restaurant[3];
            restaurantDays.textContent = restaurant[4];
            restaurantInfo.append(restaurantName);
            restaurantInfo.append(restaurantAdress);
            restaurantInfo.append(restaurantPhone);
            restaurantInfo.append(restaurantHours);
            restaurantInfo.append(restaurantDays);
            // restaurantCard.appendChild(chickenFace);
            restaurantCard.appendChild(restaurantInfo);
            restauransList.appendChild(restaurantCard);
        }
        restaurantMap.appendChild(chickenFace);
        restaurantsDiv.appendChild(restauransList);
        restaurantsDiv.appendChild(restauransList);
        contactoContent.appendChild(restaurantsDiv);




        content.appendChild(contactoContent);
        };
        
    const erase = () => {
        const contactoContent = document.getElementById("tabContent");
        content.removeChild(contactoContent);
    }

    
    return {create , erase}
})()

export {contactoFunctionTab}


const rest = document.getElementsByClassName("sl-item");
const ordRest =[]
let i = 0;
while (!!rest[i] === true){
    const res =[]
    res[0] = rest[i].getElementsByClassName("p-title")[0].textContent;
    res[1] = rest[i].getElementsByClassName("p-area")[0].textContent;
    res[2] = rest[i].getElementsByClassName("p-area")[1].textContent;
    res[3] = rest[i].getElementsByClassName("p-time")[0].textContent;
    res[4] = rest[i].getElementsByClassName("p-time")[1].textContent;
    ordRest.push(res);
    i++;
};