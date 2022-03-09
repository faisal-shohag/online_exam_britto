var router = new Navigo(null, true, '#!');
var app = document.querySelector('#app');



router.on({
    "/": function(params){
        navManage('home');
        app.innerHTML = `
        <div class="app_div-top">
        <div class="top_bar">
        <div class="avatar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dnTPinsqKjbwfHqn4yTxtL-SLfFlbFZm0A&usqp=CAU" />
        </div>
        <div class="app_time">
        <div class="time">17:24</div>
        <div class="date">09 Mar 2022</div>
        </div>
        </div>


        <div class="search_bar">
        <div class="search-icon"><i class="icofont-search-1"></i></div>
        <div class="search-input">Search exams or books</div>
        </div>
        <div class="banner">
  <div class="splide__track">
		<ul class="splide__list">
		</ul>
  </div>
</div>
</div> 

<div class="section-title">Practices</div>
<div class="section_list">



<div class="section_list_item">
<div class="section_icon"><img src="https://img.icons8.com/color/100/000000/story-book.png"/></div>
<div class="section_item_title">Chapter</div>
</div>

<div class="section_list_item">
<div class="section_icon"><img src="https://img.icons8.com/color/100/000000/story-book.png"/></div>
<div class="section_item_title">Chapter</div>
</div>

<div class="section_list_item">
<div class="section_icon"><img src="https://img.icons8.com/color/100/000000/story-book.png"/></div>
<div class="section_item_title">Chapter</div>
</div>
</div>


`;
     const splide__list =  document.querySelector('.splide__list');
        splide__list.innerHTML = '';
        for(let i=0; i<banner_data.length; i++){
            splide__list.innerHTML += `
            <li class="splide__slide" style="background: ${banner_data[i].color}">
            <div class="banner-title">${banner_data[i].title}</div>
            <div class="banner-icon">${banner_data[i].iconOne}</div>
            <div class="banner-icon2">${banner_data[i].iconTwo}</div>
            <div class="banner-price">${banner_data[i].price}<i class="icofont-taka"></i></div>
            <div class="bannner-offer">
            <div class="offer-amount">${banner_data[i].offerAmount}<i class="icofont-taka"></i> OFF</div>
            <div class="offer-condition">${banner_data[i].offerTime}</div>
            </div>
            <div class="bannner-time">
            <div class="offer-amount"><i class="icofont-ui-clock"></i> Starting </div>
            <div class="offer-condition">${banner_data[i].starting}</div>
            </div>
            <div class="banner-button" style="background: ${banner_data[i].button}">Start Now</div>
            </li>
            `
        }
        var splide = new Splide( '.banner', {
            type   : 'loop',
            padding: '2rem',
            autoplay: true
          } );
          splide.mount();


     const section_list = document.querySelector('.section_list');
     section_list.innerHTML = '';
     for(let i=0; i<practice_section_data.length; i++){
         section_list.innerHTML += `
         <div class="section_list_item">
<div class="section_icon">${practice_section_data[i].icon}</div>
<div class="section_item_title">${practice_section_data[i].title}</div>
</div>
         `
     }

    },
    "/rank": function(params){
        navManage('rank');
        app.innerHTML = `
        <h1>rank</h1>
        `;
    },
    "/progress": function(params){
        navManage('progress');
        app.innerHTML = `
        <h1>progress</h1>
        `;
    },
    "/notify": function(params){
        navManage('notify');
        app.innerHTML = `
        <h1>notify</h1>
        `;
    }
}).resolve();



function navManage(page) {
    $('.nav').removeClass('nav-active');
    $('#'+page).addClass('nav-active');
    $('.nav-title').hide();
    $('#'+page+' .nav-title').show();
}



// window.addEventListener('hashchange', function(){
//     console.log(window.location.hash);
//     navArr =['']
//     if(window.location.hash){
        
//     }
// })