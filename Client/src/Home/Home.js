
import  HttpGateway from '../services/httpGateway';

function HomeController() {

    this.categoryList = [];
    this.banners=[]
    this.name="Rajanish"

    let httpGateway = new HttpGateway();
    let _this = this;

    httpGateway.getCategories().then(res => {
        console.log(res)
        _this.categoryList = res;
    })
    httpGateway.getOffers().then(res => {
        console.log(res)
        _this.banners = res;
    })

    // let slideIndex=1
    // showSlides(slideIndex)

    // function showSlides(n) {
    //     let i;
    //     let slides = document.getElementsByClassName("mySlides");
    //     let dots = document.getElementsByClassName("dot");
    //     if (n > slides.length) {slideIndex = 1}    
    //     if (n < 1) {slideIndex = slides.length}
    //     for (i = 0; i < slides.length; i++) {
    //       slides[i].style.display = "none";  
    //     }
    //     for (i = 0; i < dots.length; i++) {
    //       dots[i].className = dots[i].className.replace(" active", "");
    //     }
    //     slides[slideIndex-1].style.display = "block";  
    //     dots[slideIndex-1].className += " active";
    //   }

}

HomeController.prototype.carouselControll=function(){

    document
}

export { HomeController }