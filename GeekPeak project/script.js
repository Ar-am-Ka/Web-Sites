var ttl=document.title;
/* ----- КАРУСЕЛЬ -----------------*/
function slideImg(order) {
    if(ttl=="GeekPeak - Главная"){
        currentImg=order;
        switch (order) {
            case 0:
                s1.style.background='#ffffffa1';
                s2.style.background='';
                s3.style.background='';
                s4.style.background='';
                break;
            case 1:
                s1.style.background='';
                s2.style.background='#ffffffa1';
                s3.style.background='';
                s4.style.background='';
            break;
            case 2:
                s1.style.background='';
                s2.style.background='';
                s3.style.background='#ffffffa1';
                s4.style.background='';
            break;
            case 3:
                s1.style.background='';
                s2.style.background='';
                s3.style.background='';
                s4.style.background='#ffffffa1';
                break;
        }
        
        document.getElementById('slideLink').setAttribute('href',sliderLnk[order]);
        document.getElementById('slideText').innerHTML=sliderTxt[order];  
    }
    document.getElementById('slide').setAttribute('src',sliderImg[order]);
}

if(document.title=="GeekPeak - Главная") {
    var sliderImg=new Array('img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg');
    var sliderLnk=new Array('article2.html','article4.html','article6.html','article7.html')
    var sliderTxt=new Array('69 млрд мелодий выложены в сеть, с целью борьбы с токсичной музыкальной индустрией','ИИ, имитирующий детское познание мира, оказалось сложнее запутать','Вакцина от коронавируса с чипами Билла Гейтса и ответка маэстро конспирологии, Никиты Михалкова','Ninebot Air T15<br>электрический самокат с интересным внешним видом');
    var s1=document.getElementById("s1"),s2=document.getElementById("s2"),s3=document.getElementById("s3"),s4=document.getElementById("s4");
    s1.addEventListener('click', ()=> { slideImg(0) });
    s1.style.background='#ffffffa1';
    s2.addEventListener('click', ()=> { slideImg(1) });
    s3.addEventListener('click', ()=> { slideImg(2) });
    s4.addEventListener('click', ()=> { slideImg(3) });
    
    var currentImg=0; // Index of current image
    function slideShow(){
        if(currentImg >= sliderImg.length) currentImg=0;
        slideImg(currentImg);
        currentImg++;
    }
    var slideDelay=4000;
    var timer=setInterval(slideShow,slideDelay);
    function stopTimer(){
        clearInterval(timer);
    }
    
    var slider=document.getElementById('slider');
    slider.addEventListener('mouseover', ()=> { stopTimer() });
    slider.addEventListener('mouseout', ()=> { timer=setInterval(slideShow,slideDelay) });
/*=======================================*/

/* КНОПКА ЗАГРУЗКИ СТАРЫХ ПРЕДЫДУЩИХ ЗАПИСЕЙ*/
function feedLoadFalase(flag){
    if(flag) {
        feed_load.style.cursor='default';
        feed_load.innerHTML='Более старых записей не найдено';
        setTimeout('feedLoadFalase(false)',2500);
    } else {
        feed_load.style.display='none'; 
    }
}
var feed_load=document.querySelector('.feed-load');
feed_load.addEventListener('click', ()=>{
    feed_load.innerHTML=". . .";
    setTimeout('feedLoadFalase(true)',2500);
})
/*================================================*/
}
/*================================================*/



/* ------- GALLERY-------------*/
var currentGalleryImg=0;
function slideGallery(dir){
    switch(dir){
        case false:
            currentGalleryImg--;
            if(currentGalleryImg<0)currentGalleryImg=(galleryImg.length-1);
            gallery.setAttribute('src',galleryImg[currentGalleryImg]);
            break;
        case true:
            currentGalleryImg++;
            if(currentGalleryImg>=galleryImg.length)currentGalleryImg=0;
            gallery.setAttribute('src',galleryImg[currentGalleryImg]);
            break;
    }
    
}

if (ttl=="Галерея GeekPeak") {
    var gallery=document.querySelector('img');
    var galleryImg=new Array ('img/ichargeout.jpg','img/a11.jpg','img/a12.jpg','img/AIkidout.jpg','img/AIkid.jpg','img/asus.jpg','img/asus1.jpg','img/asus2.jpg','img/asus3.jpg','img/asus4.jpg','img/chip1.jpg','img/muz69in.jpg','img/muz69.jpg','img/nbot1.jpg','img/nbot2.jpg','img/nbot3.jpg','img/podsout.jpg','img/podsin.jpg');
    var prev=document.getElementById('prev'),next=document.getElementById('next');
    prev.addEventListener('click', () => { slideGallery(false) });
    next.addEventListener('click', () => { slideGallery(true) });
}
/*=============================================================================*/



/* ПЕРЕМОТКА СТРАНИЦЫ К НАЧАЛА НАВЕРХ */
function scrollTo(elem){
    window.scroll({
        top: elem.offsetTop,
        left: 0,
        behavior: 'smooth',
    })
}
var btn_scroll=document.querySelector('.btn-scroll');
btn_scroll.addEventListener('click', () => {
    scrollTo(document.querySelector('.wrapper'))
})
/*=======================================*/


/* SETTINGS */
var setBG=document.getElementById('settings-bg');
var set=document.getElementById('settings');
var setBtn=document.getElementById('settings-btn');
setBtn.addEventListener('click', ()=> {
    setBG.setAttribute('class','setBG-show');
    set.setAttribute('class','settings-show');
})
document.getElementById('settings-bg').addEventListener('click', ()=> {
    setBG.setAttribute('class','setBG-hide');
    set.setAttribute('class','settings-hide');
})


/* NIGHT THEME */
var className
var feedLoad=document.querySelector('.feed-load');
var headline=document.querySelectorAll('.headline');
var copy=document.querySelector('.copy');
var textP=document.querySelectorAll('#text p');

var body=document.querySelector('body');
var header=document.querySelector('header');
var footer=document.querySelector('footer');
var authorN=document.getElementById('authorName');


var nightThemeSwitch=document.getElementById('switch');
nightThemeSwitch.addEventListener('click', ()=> {
    if (nightThemeSwitch.checked==true) {
        setBG.style.background="#3c3c4175";
        set.style.background="#3c3c41";
        body.setAttribute('class','night');
        header.setAttribute('class','night');
        footer.setAttribute('class','night');
        
        className=copy.getAttribute('class');
        copy.setAttribute('class',className+' night');
        copy.style.background="#47474d";
        className=btn_scroll.getAttribute('class');
        btn_scroll.setAttribute('class',className+' night');
    
        if(ttl=="GeekPeak - Главная") {
            className=feedLoad.getAttribute('class');
            feedLoad.setAttribute('class',className+' night');        
        } else {
            textP.forEach( e => {
                e.setAttribute('class','night');
            })
            className=headline[0].getAttribute('class');
            headline.forEach( e => {
                    e.setAttribute('class','night '+className);
            })  
            authorN.setAttribute('class','night'); // fix later
        }
    } else {
        setBG.style.background="";
        set.style.background="";
        body.setAttribute('class','');
        header.setAttribute('class','');
        footer.setAttribute('class','');
        
        className=copy.getAttribute('class');
        let classNameS=className.split(' ');
        copy.setAttribute('class',classNameS[0]);
        copy.style.background="";

        className=btn_scroll.getAttribute('class');
        classNameS=className.split(' ');
        btn_scroll.setAttribute('class',classNameS[0]);
    
        if(ttl=="GeekPeak - Главная") {
            className=feedLoad.getAttribute('class');
            classNameS=className.split(' ');
            feedLoad.setAttribute('class',classNameS[0]);
        } else {
            textP.forEach( e => {
                e.setAttribute('class','');
            })
            className=headline[0].getAttribute('class');
            classNameS=className.split(' ');
            headline.forEach( e => {
                e.setAttribute('class',classNameS[1])
            })
            authorN.setAttribute('class','');
        }
    }
})



/*=======================================*/




