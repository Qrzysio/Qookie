$.fn.extend({
  Qookie: function(options) {
    var host = $(location).attr('protocol')+'//'+$(location).attr('hostname');
    var defaults = {
      text: 'W ramach witryny stosujemy pliki cookies celem świadczenia usług na najwyższym poziomie. <a href="'+host+'/polityka-cookies/" title="Polityka cookies">Dowiedz się więcej</a>.',
      parent: $('body'),
      cookie_name: 'QookieEuAgree_js',
      auto_accept: true,
      test: false
    };
    var o = $.extend(defaults, options);
    $('#Qookie').remove();
    var box = $('<div id="Qookie"><div class="inner"><div class="text"><span class="close"></span>'+o.text+'</div></div></div>');
    if (readCookie(o.cookie_name) == null) {
      o.parent.prepend(box);                
      if (!o.test && o.auto_accept) createCookie(o.cookie_name, 1, 365)
    };
    box.find('span').click(function(e) {
      if (!o.test && !o.auto_accept) createCookie(o.cookie_name, 1, 365);
      box.slideUp(350);                
    });

    function createCookie(name, value, days) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString()
      } else var expires = "";
      var cookie = name + "=" + value + expires + "; path=/";
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