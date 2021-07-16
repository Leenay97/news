$(function(){
function time(){
			var date = new Date();
			var year = date.getFullYear(),
			month = date.getMonth() < 10 ? '0'+ (date.getMonth() + 1) : date.Month() + 1;
			day = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate() ;
			hours = date.getHours() < 10 ? '0'+ date.getHours(): date.getHours();
			minutes = date.getMinutes() < 10 ? '0'+ date.getMinutes(): date.getMinutes();
			var datetime = hours + ':' + minutes + ' ' + day + "." + month + "." + year;
			var time = hours + ':' + minutes;
			$('#date-up').text(datetime);
			$('.header-time').text(time);
			$('#header-time-small').text(time);
		};
		setInterval(function(){
			time();
		}, 1);
	var $menu = 1;
	$('#menu-button').click(function(){
			$('main').toggleClass('hidden');
			
			if ($menu == 1){
			$('#date-time-weather').hide();
			
			$('#menu-button').addClass('menu-button-active')
			$('#menu-small').show();
			$('footer').hide();
			$menu = 0;
		}else{
			$('#date-time-weather').show();
			$menu = 1;
			$('#menu-button').removeClass('menu-button-active')
			$('#menu-small').hide();
			$('footer').show()
		};
		console.log($menu);
		});
		$(window).resize(function(){
				if ($('body').width() >= 800) {
					$menu = 1;
					$('#menu-small').css('display', 'none');
					$('main').removeClass('hidden');
					$('footer').show();
					$('#menu-button').removeClass('menu-button-active');
					$('#date-time-weather').css('display', 'none');

				}else{
					$menu = 1;
					$('#menu-small').css('display', 'none');
					$('main').removeClass('hidden');
					$('footer').show();
					$('#menu-button').removeClass('menu-button-active');
					$('#date-time-weather').css('display', 'flex');
				};
		});
});
