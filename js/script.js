$(document).ready(function(){
  $('.button').click(function(){
    $(this).addClass('active')..sidlings().removeClass('active');

    var filter = $(this).attr('data-filter')

    if(filter == 'all'){
       $('.img').show(400);
    }else{
      $('.img').not('.'+filter).hide(200);
      $('.img').filte('.'+filter).show(200);
    }
  })
}};
