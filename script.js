$(function(){
    $fadeInObjects = $('.fadeInImages ul li');
    $fadeInObjects.hide();

    var loop = setInterval(function(){
        var $listFirst = $('.slider li:first');
        var clone=$listFirst.clone(true);

        $listFirst.animate(
            {marginLeft: "-341px"},
            {duration:  1000,
            complete: function(){
                $listFirst.remove();
                clone.clone(true).insertAfter($('.slider li:last'));
                }
            }
        )

    },3000);
    //ループするスライドショー　setIntervalイベントの使い方
    //イベントと、メソッドの違い　＝　

    $('.slideBtn').click(function(){
        var $listFirst = $('.slider li:first');
        var $listLast = $('.slider li:last');

        if($(this).hasClass('slideRight')){
            var clone=$listFirst.clone(true);
            $listFirst.animate(
                {marginLeft: "-341px"},
                {duration:  1000,
                complete: function(){
                    $listFirst.remove();
                    clone.clone(true).insertAfter($('.slider li:last'));
                    }
                }
            )
        }else if($(this).hasClass('slideLeft')){
            var clone=$listLast.clone(true);

            //分からず
            // +リストの左側にlistLastをフェードインさせる。(同時=同じ時間で)
            
            //リストを右にずらすアニメーション 
            $listFirst.animate(
                {marginRight: "-341px"},
                {duration:  1000,
                complete: function(){
                    $listLast.remove();
                    clone.clone(true).insertBefore($('.slider li:first'));
                    }
                }
            )
        }
    })

    $(window).scroll(function(){
        var position = $('html,body').scrollTop();
        var indication = $('.slider').offset().top;

        if(position >= indication){
            $fadeInObjects.each(function(i){
                $(this).delay(500*i).fadeIn(1000);
            });
        }else{

        }

    });
});
