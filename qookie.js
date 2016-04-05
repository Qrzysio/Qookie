$.fn.extend({
        cookiesEU: function(options) {
        	var host = $(location).attr('protocol')+'//'+$(location).attr('hostname');
            var defaults = {
                text: 'W ramach witryny stosujemy pliki cookies celem świadczenia usług na najwyższym poziomie. <a href="'+host+'/polityka-cookies/" title="Polityka cookies">Dowiedz się więcej</a>.',
                close: '',
                parent: $('body'),
                show_close: true,
                cookie_name: 'cookieEuAgree_js',
                auto_accept: true,
                domain: '',
                test: false
            };
            var o = $.extend(defaults, options);
	        $('#cookieEU').remove();
            var box = $('<div id="cookieEU"><div class="inner"><div class="text">'+o.text+'</div></div></div>');
            if (o.show_close == true) box.find('div.text').prepend('<a href="#" class="close">'+o.close+'</a>');
            if (readCookie(o.cookie_name) == null) {
                o.parent.prepend(box);                
                if (!o.test && o.auto_accept) createCookie(o.cookie_name, 1, 365, o.domain)
            };
            box.find('a.close').click(function(e) {
                e.preventDefault();
                if (!o.test && !o.auto_accept) createCookie(o.cookie_name, 1, 365, o.domain);
                box.slideUp(350);                
            });

            function createCookie(name, value, days, domain) {
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    var expires = "; expires=" + date.toGMTString()
                } else var expires = "";
                var cookie = name + "=" + value + expires + "; path=/";
                if (domain.length > 0) cookie = cookie + "; domain=" + domain;
                document.cookie = cookie
            };

            function readCookie(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
                }
                return null
            }
        }
    })