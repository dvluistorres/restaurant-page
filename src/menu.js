import imgComboFasado from "./images/ASADO_FAMILIAR.png";
import imgKombiAsado from "./images/KOMBY_ASADO.png";
import imgCombo8Presas from "./images/ochopresas.png";
import imgBowlBbq from "./images/BowlBBQ.png";
import imgEnsaladaPollo from "./images/ensalada_pollo.png";
import bannerPromocion from "./images/bannerPromocion.png";

const menuFunctionTab = (() =>{
    const create = ()=>{
        erase();
        const tabContent = document.createElement("div");
        tabContent.setAttribute("id","menuContent");

        const bannerPromo = new Image();
        bannerPromo.src = bannerPromocion;
        bannerPromo.setAttribute("class","bannerPromo")
        tabContent.appendChild(bannerPromo);

        let dish = class {
            constructor(title , price , description, image) {
              this.title = title;
              this.price = price;
              this.description = description;
              this.image = image;
              dishes.push(this);
              };
            }
        
        const dishes = [];
        const comboFasado = new dish ("Combo familiar asado", "$59,900 COP" , "El tradicional y único sabor del Kokoriko Asado para compartir. 1 y 1/2 Kokoriko asado (12 presas) + veinte (20) arepas y 3 und de ají.",imgComboFasado);
        const kombiAsado = new dish ("Kombi asado", "$20,900 COP", "Dos (2) presas de Kokoriko asado, fríjol con carne molida, arroz, una (1) arepa, una (1) Coca-Cola 400 ml y 1 und de ají. Precio válido únicamente para el canal de domicilios.",imgKombiAsado);
        const combo8Presas = new dish ("Combo 8 presas","$42,900 COP","Ocho (8) presas de kokorikronch sin acompañamientos y 4 und de miel",imgCombo8Presas);
        const bowlBbq = new dish ("Bowl BBQ","$25,900 COP","Siete (7) trozos de pollo kronch bañados en nuestra salsa BBQ, acompañados de aguacate y pico de gallo, arroz a elección y papa de la casa o yuca.",imgBowlBbq);
        const ensaladaPollo = new dish ("Ensalada con pollo","$23,900 COP","Filete de pechuga a la plancha de 90 g, mix de lechuga romana y crespa, tomate, queso mozzarella, jamón, maíz dulce, aguacate, cilantro y vinagreta.",imgEnsaladaPollo);

        function createCards () {
            for (const dish of dishes){
                const card = document.createElement("div");
                card.setAttribute("class","card");
                const menuPicture = new Image();
                menuPicture.src = dish.image;
                const cardText = document.createElement("div");
                cardText.setAttribute("class","cardText");
                const cardTitle = document.createElement("div");
                cardTitle.setAttribute("class","cardTitle");
                cardTitle.textContent = dish.title;
                const cardPrice = document.createElement("div");
                cardPrice.setAttribute("class","cardPrice");
                cardPrice.textContent = dish.price;
                const cardDescription = document.createElement("div");
                cardDescription.setAttribute("class","cardDescription");
                cardDescription.textContent = dish.description;
                cardText.append(cardTitle , cardPrice , cardDescription);
                card.appendChild(menuPicture);
                card.appendChild(cardText);
                tabContent.appendChild(card);
            }
        }
        createCards();

        content.appendChild(tabContent);
    }
    const erase = () => {
        const toBeRemoved = document.getElementById("content").firstChild;
        content.removeChild(toBeRemoved);
    }

    
    return {create , erase}
})()

export {menuFunctionTab};