export default class Modal {
  constructor(botaoAbrir, botaoFechar, containeModal){
  this.botaoAbrir = document.querySelector(botaoAbrir);
  this.botaoFechar = document.querySelector(botaoFechar);
  this.containerModal = document.querySelector(containeModal);

  //bind this ao callback para fazer referencia ao objt da classe
  this.eventToggleModal = this.eventToggleModal.bind(this);
  this.cliqueForaModal = this.cliqueForaModal.bind(this);
}

//are ou fecha o modal (trocando a classe)
  toggleModal() {
      this.containerModal.classList.toggle('ativo');
  }

  //adiciona evento toggle ao modal
  eventToggleModal(event){
    event.preventDefault();
    this.toggleModal();
  }

  //fecha o modal ao clicar do lado de fora 
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }
// adiciona eventos aos elementos do modal
  addModalEAvent(){
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
    
  }

  init(){
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEAvent();
    }
    return this;
  }

  
}
