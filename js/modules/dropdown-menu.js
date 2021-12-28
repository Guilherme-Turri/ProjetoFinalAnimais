import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    
  //define touchstar e clique como argumento padrao de events
  //caso o usuario nao defina
    if (events === undefined){
      this.events = ['touchstart', 'click'];
    }
    else{
      this.events = events; 
    }
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
    this.activeClass = 'active';
  }
 
//ativa o dropdown menu e adiciona
//a funcao que ovserva o clique fora dele 
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget; 
    element.classList.add(this.activeClass);
    outsideClick(element,  this.events, () => {
      element.classList.remove('active');
    });
  }

//adiciona os eventos ao 
//dropdowbn menu
  addDropDownMenusEvent(){
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }
init(){
  if(  this.dropdownMenus.length){
    this.addDropDownMenusEvent();
  }
  return this;
}

}
