const conteudoSlider = [
    {
        h3:'Four Seasons Seychelles ocean view villa',
        p: 'We had been upgraded to an ocean view villa (this is a one category upgrade over the base room, which is a garden view villa), #205. It seemed to me like our villa was especially secluded, as there were no other villas anywhere in the area. WOW, this villa was beautiful. There was a gate and then a path leading into the villas outdoor area.',
        url: '/img/pexels-leonardo-rossatti-2598638.jpg'
    },
    {
        h3:'Four Seasons Seychelles ocean view villa',
        p: 'We had been upgraded to an ocean view villa (this is a one category upgrade over the base room, which is a garden view villa), #205. It seemed to me like our villa was especially secluded, as there were no other villas anywhere in the area. WOW, this villa was beautiful. There was a gate and then a path leading into the villas outdoor area.',
        url: '/img/pexels-riccardo-307006.jpg'
    },
    {
        h3:'Four Seasons Seychelles ocean view villa',
        p: 'We had been upgraded to an ocean view villa (this is a one category upgrade over the base room, which is a garden view villa), #205. It seemed to me like our villa was especially secluded, as there were no other villas anywhere in the area. WOW, this villa was beautiful. There was a gate and then a path leading into the villas outdoor area.',
        url: '/img/pexels-thorsten-technoman-338504.jpg'
    },
    {
        h3:'Four Seasons Seychelles ocean view villa',
        p: 'We had been upgraded to an ocean view villa (this is a one category upgrade over the base room, which is a garden view villa), #205. It seemed to me like our villa was especially secluded, as there were no other villas anywhere in the area. WOW, this villa was beautiful. There was a gate and then a path leading into the villas outdoor area.',
        url: '/img/pexels-michael-block-3225531.jpg'
    }
    
]

$(document).ready(function(){
    var index = 0;

    $('#anterior').click(function(){
        if(index<= 0){
           index = conteudoSlider.length 
        }

        index = index - 1
        $('#img-slider').attr('src', conteudoSlider[index].url)        
    })

    $('#proximo').click(function(){
        if(index >= conteudoSlider.length - 1){
           index = 0
        }
        index = index + 1
        $('#img-slider').attr('src', conteudoSlider[index].url)
        console.log(index)
    })

    setInterval(function () {
        if(index<= 0){
           index = conteudoSlider.length 
        }

        index = index - 1
        $('#img-slider').attr('src', conteudoSlider[index].url)
    }, 2500);
  
  });