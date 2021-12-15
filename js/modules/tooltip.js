export default class Tooltip{
  constructor(tooltips){
    this.tooltips = document.querySelectorAll(tooltips);

    //bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);


  }

// move a tooltip com base em seus estilos de acordo com a posicao do mouse 
  onMouseMove(event) {
   this.tooltipBox.style.top = `${event.pageY + 20}px`;
   console.log(innerWidth, event.pageX)
   
   if(event.pageX + 240 > window.innerWidth){
    this.tooltipBox.style.left = `${event.pageX - 190}px`;
   } 
   else{
    this.tooltipBox.style.left = `${event.pageX + 20}px`;
   }
     
  };
//remove a tooltip e os eventos de mouseleave e mousemove 
 onMouseLeave(event) {
      this.tooltipBox.remove();
      event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
      event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
   };
//Cria a tooltipbox e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
// cria a tooltip e adicina os eventos de mousemove e mouseleave ao target
  onMouseOver(event) {
    //cria a tooltipbox e coloca em uma propriedade
    this.criarTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

 // adciciona os eventos de nouseover a tooltip
  addTooltipsEvent() { 
  this.tooltips.forEach((item) => {
    item.addEventListener('mouseover', this.onMouseOver);
  });
}

init(){
  if(this.tooltips.length){
    this.addTooltipsEvent();
  }
  return this;
}

}
