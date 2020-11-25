import $ from 'jquery'

$(function (){
    $('#loginbtn').click(function (){
        $('#loginbtn').addClass('active')
        $('#logonbtn').removeClass('active')
    });
    $('#logonbtn').click(function (){
        $('#logonbtn').addClass('active')
        $('#loginbtn').removeClass('active')
    })

})

