export default class ScrollSuave{
  constructor(links, options){
  this.linksInternos = document.querySelectorAll(links);
  this.scrollToSection = this.scrollToSection.bind(this)
  if (options === undefined){
    this.options = { behavior: 'smooth', block: 'start'};
  }
  else{
    this.options = options;
  }
 }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options)
  }
  
  addLinkEvent(){
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init(){
   if (this.linksInternos.length){
    this.addLinkEvent();
   }

  return this;
  }


}


//'[data-menu="suave"] a[href^="#"]'