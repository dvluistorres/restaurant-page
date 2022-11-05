console.log("runing webpcket");
import logoRed from "./images/logoRed.png";
import gitLogo from "./images/github.png";
import { inicioFunctionTab } from "./inicio";
import { menuFunctionTab } from "./menu";
import { contactoFunctionTab } from "./contacto";



const content = document.getElementById("content");

const create = (() => {
  function Header() {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const myLogo = new Image();
    myLogo.src = logoRed;
    header.appendChild(myLogo);

    const tabs = document.createElement("div");
    tabs.setAttribute("id","tabs")

    function createTab(tabElement , tabFunction){
      const newElement = document.createElement('h3');
      newElement.textContent = tabElement.toUpperCase();
      newElement.setAttribute('class', 'tab');
      newElement.setAttribute('id', `${tabElement}Tab`);
      newElement.addEventListener("click",tabFunction);
      window[`${tabElement}`+"Tab"] = newElement;
      return window[`${tabElement}`+"Tab"];
    }

    createTab("inicio", inicioFunctionTab.create);
    createTab("menu", menuFunctionTab.create);
    createTab("contacto", contactoFunctionTab.create);


    tabs.appendChild(inicioTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactoTab);

    header.appendChild(tabs);

    return header;
  }

  function Footer() {
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.textContent = "Copyright © 2021 devLuisTorres"
    const githubLogo = new Image();
    githubLogo.src = gitLogo;
    footer.appendChild(githubLogo);
    return footer
  }

return {Header,Footer}
})()



const parentContent = content.parentNode;
parentContent.insertBefore(create.Header(),content);
parentContent.appendChild(create.Footer());

inicioFunctionTab.create();
