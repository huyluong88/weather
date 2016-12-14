// let $ = require('jquery')
//
// $.get('http://tiy-orl-proxy.herokuapp.com/darksky/forecast/f2b0e717f091d122430c8e070c88ef00/28.5383355,-81.3792365')
// .then(function (response){
//   var temp = response.currently.temperature
//   $('.temp').html(temp)
//
//   function color (tempy) {
//        tempy = temp
//
//        if (tempy > 75) {
//        return red
//        } else {
//        return blue
//        }
//      }
//      $("#change").css("background-color", color)
//     //  getElementById('change').css('background-color', color)
// })


let $ = require ('jquery')

$.get('http://tiy-orl-proxy.herokuapp.com/darksky/forecast/df63a1555fc626bf0afe58a0651806ad/28.5383355,-81.3792365').
then(function (response) {
     var temp = response.currently.temperature
     $('.temp').html(temp)

     function color (tempy) {
       tempy = temp
       if (tempy > 80) {
       return '#f44b42 '
     } else if (tempy > 60 && tempy < 80) {
       return '#ffa38e '
     } else if (tempy < 60) {
       return '#85c6f7 '
     }
   }
     $(".change-color").css("background-color", color)
})
