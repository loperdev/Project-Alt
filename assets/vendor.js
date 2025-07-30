//Cookie Js
function setCookie(e,t,i){let o=new Date;o.setTime(o.getTime()+864e5*i);let n="expires="+o.toUTCString();document.cookie=e+"="+t+";"+n+";path=/;SameSite=None; secure"}function getCookie(e){var t,i,o,n=document.cookie.split(";");for(t=0;t<n.length;t++)if(i=n[t].substr(0,n[t].indexOf("=")),o=n[t].substr(n[t].indexOf("=")+1),(i=i.replace(/^\s+|\s+$/g,""))==e)return unescape(o)}
//theme cart Js
const PUB_SUB_EVENTS={cartUpdate:"cart-update",quantityUpdate:"quantity-update",variantChange:"variant-change",cartError:"cart-error"};let subscribers={};function subscribe(r,s){return void 0===subscribers[r]&&(subscribers[r]=[]),subscribers[r]=[...subscribers[r],s],function b(){subscribers[r]=subscribers[r].filter(r=>r!==s)}}function publish(r,s){subscribers[r]&&subscribers[r].forEach(r=>{r(s)})}

class SlideSection extends HTMLElement {
  constructor() {
    super();
    this.initSlide();
  }
  initSlide(i){
      var opt = this.dataset.swiper || "{}",
          swSlider = new Swiper(this, JSON.parse(opt));
      if(i != undefined) swSlider.slideTo(i)
      
      const slideshow = this.classList.contains('slideshow');
      if(slideshow){
        this.resizePlayer();
      }
  }
  resizePlayer(){
      const _this = this;
      function reportWindowSize() {
          var iframes = _this.querySelectorAll('.embed-player');
          if (!iframes) return;
          var width = _this.offsetWidth,
              height = _this.offsetHeight,
              playerWidth, playerHeight,
              ratio = 16/9;
          iframes.forEach((iframe) => {
            if (width / ratio < height){
              playerWidth = Math.ceil(height * ratio);
              iframe.style.cssText = `width:${playerWidth}px;height:${height}px;left:${(width - playerWidth) / 2}px;top:0;`;
            } else {
              playerHeight = Math.ceil(width / ratio);
              iframe.style.cssText = `width:${width}px;height:${playerHeight}px;left:0;top:${(height - playerHeight) / 2}px;`;
            }
          });
      }
      reportWindowSize();
      window.onresize = reportWindowSize;
    }
}
customElements.define("slide-section", SlideSection);