const nav_data = [
    {
        title:'Home',
        id: 'home',
        icon: '<i class="icofont-home"></i>',
        link: '/'
    },
    {
        title: 'Rank',
        id: 'rank',
        icon: '<i class="icofont-star-shape"></i>',
        link: '/rank'
    },
    {
        title: 'Progress',
        id: 'progress',
        icon: '<i class="icofont-chart-line"></i>',
        link: '/progress'
    },
    {
        title: 'Notify',
        id: 'notify',
        icon: '<i class="icofont-notification"></i>',
        link: '/notify'
    },

]
const bottom_nav = document.querySelector('.bottom-nav');
nav_data.forEach(item => {
    bottom_nav.innerHTML += `
    <div id="${item.id}" class="nav">
    <div class="nav-icon">${item.icon}</div>
    <div id="${item.id}-title" class="nav-title">${item.title}</div>
</div>
    `
});

$('.nav').off().click(function(e){
    e.preventDefault();
  const id = $(this)[0].id;
  if(id==='home') router.navigate('/');
  else router.navigate('/'+id);
});
