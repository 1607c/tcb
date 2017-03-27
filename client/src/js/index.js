
var str = '<ul>';
$.ajax({ 
    url:'http://localhost:3001/',
    dataType:'jsonp',
    method: 'get',
    success : function (data) {
        var lis = data.result;
        for (var i = 0;i<lis.length;i++){
            str+='<li class="sh">'+
                '<span>' +
                '<img src="'+lis[i].thum_img.big+'">' +
                '<p class="p-tit">'+lis[i].title+'</p>' +
                '<p class="p-tit-sub">'+lis[i].subhead+'</p>' +
                '<div class="p-price">' +
                '<div class="p-price-l">￥<span class="p-price-num">'+lis[i].price+'</span></div>' +
                '<div class="p-price-r">' +
                '<span class="p-price-off">'+lis[i].discount+'折</span>' +
                '<del class="p-price-oring">￥'+lis[i].com_price+'</del>'+
                '</div>'+
                '<div class="p-desc">'+lis[i].describe+'</div>'+
                '</div>'+
                '</span>';
            if (i%5==4){
                str+='</li></ul><ul>'
            }
        }

        $('#cc').html(str);
    }
});


var htr = '<ul>';
$.ajax({
    url:'http://localhost:3001/hot',
    dataType:'jsonp',
    method:'get',
    success:function (data) {
        var hlis = data.product_list;
        for(var h = 0;h < hlis.length;h++){
            htr+='<li class="sh">'+
                '<span>' +
                '<img src="'+hlis[h].thum_img.big+'">' +
                '<p class="p-tit">'+hlis[h].title+'</p>' +
                '<p class="p-tit-sub">'+hlis[h].selling_point+'</p>' +
                '<div class="p-price">' +
                '<div class="p-price-l"><span class="p-price-num">'+hlis[h].price+'</span></div>' +
                '<div class="p-descc">'+hlis[h].explain+'</div>'+
                '</div>'+
                '</span></li>';
        }
        htr+='</ul>';
        $('#c').html(htr)
    }
});

var btr = '<ul><li>';
$.ajax({
    url:'http://localhost:3001/brand',
    dataType:'jsonp',
    method:'get',
    success:function (data) {
        var blis = data.img;
        for(var b = 0;b < blis.length;b++){
            btr+='<a href="#"><img src="'+blis[b].src+'" alt=""></a>'
            if(b%4==3){
                btr+='</li><li>'
            }
        }
        btr+='</li></ul>';
        $('.brand').html(btr);
    }
})

var wtr = '';
$.ajax({
    url:'http://localhost:3001/brand/swiper',
    dataType:'jsonp',
    method:'get',
    success:function (data) {
        var slis = data.result;
        for (var s = 0;s < slis.length;s++){
            // wtr+='<div class="swiper-slide swiper-slide2"><img src="'+slis[s].product_img+'" alt=""><span><p>'+slis[s].comment_mobile+'</p><p>'+slis[s].comment_content+'</p></span></div>'
            wtr+='<div class="swiper-slide swi2"><img src="'+slis[s].product_img+'" alt=""><span><p>'+slis[s].comment_mobile+'</p><p>'+slis[s].comment_content+'</p></span></div>'
        }
        $('#brand-swiper').html(wtr);
        var swiper2 = new Swiper('.swiper-container2', {
            direction: 'vertical',
            loop : true,
            slidesPerView : 'auto',
            loopedSlides :6,
            autoplay:2500,
            autoplayDisableOnInteraction: false,
            slidesPerGroup:1,
            speed:2000
        });
    }
})

$(".pagination").createPage({
    pageCount:10,
    current:1,
    backFn:function(p){
        console.log(p);
    }
});