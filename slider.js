function Slider(){
    this.imgURls= [];
    this.currentImageIndex= 0;
    this.showPrevBtn=null;// document.querySelector('show-prev-btn'),
    this.showNextBtn=null;// document.querySelector('show-next-btn'),
    this.slideImage=null;// document.querySelector('slide-image'),
    this.start= function (elId) {
        const that = this;
        const elementSelector='#'+elId;
        const el = document.querySelector(elementSelector);
        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImage = el.querySelector('.slide-img');

        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPreBtnCLick(e);
        });
        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnCLick(e);
        });

        //create images array
        if(elId==='itk-slider1'){
        this.imgURls.push('https://s.auto.drom.ru/i24229/s/photos/32633/32632132/gen600_349925950.jpg');
        this.imgURls.push('https://s.auto.drom.ru/i24229/s/photos/32633/32632132/gen600_349925940.jpg');
        this.imgURls.push('https://s.auto.drom.ru/i24230/s/photos/32633/32632132/gen600_356027399.jpg');
        this.imgURls.push('https://s.auto.drom.ru/i24229/s/photos/32633/32632132/gen600_349926000.jpg');
        }else if(elId==='itk-slider2' ){
        this.imgURls.push('https://autoreview.ru/images/Article/1671/Article_167188_860_575.jpg');
        this.imgURls.push('https://auto.ironhorse.ru/wp-content/uploads/2017/11/Rio-X-Line-rear.jpg');
        this.imgURls.push('https://www.zr.ru/_ah/img/cTRoX1iuhUUFHIhygq4CdA=s800');
        }
       

        this.slideImage.src = this.imgURls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    };
    this.onShowPreBtnCLick= function (event) {
        console.log('prev click');
        this.currentImageIndex--;
        this.slideImage.src = this.imgURls[this.currentImageIndex];
        this.showNextBtn.disabled = false;
        //disable prev button if need

        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }


    };
    this.onShowNextBtnCLick=function (event) {
        console.log('next click');
        this.currentImageIndex++;
        this.slideImage.src = this.imgURls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;
        //disabled next button if need
        if (this.currentImageIndex === (this.imgURls.length - 1)) {
            this.showNextBtn.disabled = true;
        }


    };

}




