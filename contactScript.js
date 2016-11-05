/**
 * Created by Jia on 9/30/2016.
 */

/*
var cookie=document.cookie;
var css;
if(cookie==null||cookie==""){
    document.getElementById("importstyle").href="css.css";

}
else{
    var index= cookie.indexOf("=");
    css=cookie.substr(index+1);
    document.getElementById("importstyle").href=css;
}
*/

function validateEmail(email) {
    reg = /^[^\s]+@[^\s]+\.[^\s]{2,3}$/;
    if (reg.test(email)) {
        return true
    }else{
        return false;
    }
}

function sendmessage(){
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var ta= document.getElementById("ta").value;
    var message="Please fill your";

    if(name==""||email==""||ta==""){
        if(name==""){
            message= message+" name ";
        }
        if(email==""){
            message=message +" email "
        }
        if(ta==""){
            message=message+ " message"
        }
        message+="!";
        document.getElementById('message').innerHTML=message;

    }
        else{
        if(!validateEmail(email)){
            document.getElementById('message').innerHTML='Please check your email pattern!';
        }
        else{
            document.getElementById('message').innerHTML='Hi '+name+',I got your message, Thank you!';
        }

    }
    document.getElementById('message').style.fontSize = '12px';
}



$(document).ready(function(){
    var height=$('.flex-item').css('width');
    var ww=window.innerWidth;
    if(ww>'1175'){
        $('.flex').css('width','70%');
        $('.flex-item').css('width','45%');
        var height=$('.flex-item').css('width');
        $('.flex-item').css('height',height);
        $('.flex-item-full').css('height',height);
    }

    if(ww<='1175'&& ww>'921'){

        $('.flex').css('width','90%');
        $('.flex-item').css('width','45%');
        $('.flex-item').css('height',height);
    }

    if(ww<='921'){
        $('.flex').css('width','90%');
        $('.flex-item').css('width','100%');
        $('.flex-item').css('height','auto');
    };
    var cookie= getCookie("back");
    var url= $('body').css('background-image');
    var front= url.substr(0,url.length-11);



    if(cookie==null||cookie==""){
        var newUrl=front+'back1.jpg")';
        $('body').css('background-image',newUrl);
        setCookie("back","back1",1)
    }
    else{
        var newUrl=front+cookie+'.jpg")';
        $('body').css('background-image',newUrl);
    }





    $('.themebn').click(function(){
        url= $('body').css('background-image');
        front= url.substr(0,url.length-11);
            if(url.endsWith('back1.jpg")')){
             var newUrl=front+'back2.jpg")';
                $('body').css('background-image',newUrl);
                setCookie("back","back2",1)

            }
            if(url.endsWith('back2.jpg")')){

                var newUrl=front+'back1.jpg")';
                $('body').css('background-image',newUrl);
                setCookie("back","back1",1)
            }


        });


});
$(window).bind('resize', function() {
    var height=$('.flex-item').css('width');
    var ww=window.innerWidth;
    
    $('#test').text(ww);
    if(ww>'1175'){
     $('.flex').css('width','70%');
        $('.flex-item').css('width','45%');
        var height=$('.flex-item').css('width');
        $('.flex-item').css('height',height);
    }

    if(ww<='1175'&& ww>'921'){

        $('.flex').css('width','90%');
        $('.flex-item').css('width','45%');



        $('.flex-item').css('height',height);
    }

    if(ww<='921'){
        $('.flex').css('width','90%');
        $('.flex-item').css('width','100%');
        $('.flex-item').css('height','auto');
    }
    if(ww<='800'){
         $('#br').html('<br>');


    };
    if(ww>'800'){
        $('#br').html('');

    };

});



function init_map(){
    var myOptions = {zoom:14,center:new google.maps.LatLng(47.633716,-122.345149),mapTypeId: google.maps.MapTypeId.ROADMAP};
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(47.633716,-122.345149)});
    infowindow = new google.maps.InfoWindow({content:'MyHome at Seattle<br>'});
    google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
    infowindow.open(map,marker);}
google.maps.event.addDomListener(window, 'load', init_map);

function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}


