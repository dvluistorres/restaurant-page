import imgCombo8Presas from "./images/ochopresas.png";
import imgWhatsapp from "./images/whatsapp-icon.png";
import { menuFunctionTab } from "./menu";
import chiFace from "./images/chickenFace.png";
import restaurantBan from "./images/restaurantBanner.png";
import phoneImage from "./images/phone-svgrepo-com.svg";
import clockImage from "./images/clock-svgrepo-com.svg";
import calendarImage from "./images/calendar-svgrepo-com.svg";

const contactoFunctionTab = (() =>{
    const create = ()=>{
        erase();
        const contactoContent = document.createElement("div");
        contactoContent.setAttribute('id', 'contactoContent');
        
        const pideWhatsapp = document.createElement("div");
        pideWhatsapp.setAttribute("class","pideWhatsapp");
        const combo8Presas = new Image();
        combo8Presas.src = imgCombo8Presas;
        const domicilioTitulo = document.createElement("h3");
        const whatsappPng = new Image();
        whatsappPng.src = imgWhatsapp;
        domicilioTitulo.addEventListener("click", ()=>{
            window.open("https://api.whatsapp.com/send?phone=573004100111&text=Hola!%20quiero%20un%20rico%20pollo", '_blank');
         });
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

        const restaurantBanner = new Image();
        restaurantBanner.src = restaurantBan
        restaurantBanner.setAttribute("class","restaurantBanner");
        contactoContent.appendChild(restaurantBanner);

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
        restaurantsDiv.setAttribute("class","restaurantsDiv");
        const restaurantsList = document.createElement("div");
        restaurantsList.setAttribute("class","restaurantsList");
        const restaurantMap = document.createElement("div");
        for (const restaurant of restaurants){
            const restaurantCard = document.createElement("div");
            const restaurantInfo = document.createElement("div");
            const restaurantName = document.createElement("div");
            const restaurantAdress = document.createElement("div");
            const restaurantPhone = document.createElement("div");
            const restaurantPhoneText = document.createElement("p");
            const phoneImg = new Image();
            phoneImg.src = phoneImage;
            restaurantPhone.appendChild(phoneImg);
            restaurantPhone.appendChild(restaurantPhoneText);
            const restaurantHours = document.createElement("div");
            const restaurantHoursText = document.createElement("p");
            const clockImg = new Image();
            clockImg.src = clockImage;
            restaurantHours.appendChild(clockImg);
            restaurantHours.appendChild(restaurantHoursText);
            const restaurantDays = document.createElement("div");
            const restaurantDaysText = document.createElement("p");
            const calendarImg = new Image();
            calendarImg.src = calendarImage;
            restaurantDays.appendChild(calendarImg);
            restaurantDays.appendChild(restaurantDaysText);
            restaurantName.textContent += restaurant[0];
            restaurantAdress.textContent += restaurant[1];
            restaurantPhoneText.textContent += restaurant[2];
            restaurantHoursText.textContent += restaurant[3];
            restaurantDaysText.textContent += restaurant[4];
            restaurantInfo.append(restaurantName , restaurantAdress , restaurantPhone , restaurantHours , restaurantDays);
            const chickenFace = new Image();
            chickenFace.src = chiFace;
            restaurantCard.appendChild(chickenFace);
            restaurantCard.appendChild(restaurantInfo);
            restaurantCard.setAttribute("class","restaurantCard");
            restaurantsList.appendChild(restaurantCard);
        }
        const map2 = document.createElement("iframe");
        map2.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126914.3295750815!2d-75.64573068313165!3d6.254139314010602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428562b9e8f0f%3A0xae20d955e506c981!2sKokoriko%20Oriental!5e0!3m2!1ses!2sco!4v1668001835209!5m2!1ses!2sco");
        restaurantMap.appendChild(map2);
        restaurantsDiv.appendChild(restaurantsList);
        restaurantsDiv.appendChild(restaurantMap);
        contactoContent.appendChild(restaurantsDiv);

        content.appendChild(contactoContent);
        };
        
    const erase = () => {
        const toBeRemoved = document.getElementById("content").firstChild;
        content.removeChild(toBeRemoved);
    }

    
    return {create , erase}
})()

export {contactoFunctionTab}