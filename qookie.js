$.fn.extend({
  Qookie: function(options) {
    var defaults = {
      link: $(location).attr('protocol')+'//'+$(location).attr('hostname')+'/polityka-cookies/',
      parent: $('body'),
      cookie_name: 'Qookie',
      auto_accept: true,
      test: false
    };
    var o = $.extend(defaults, options);
    $('#Qookie').remove();
    var box = $('<div class="container-fluid bg-light" id="Qookie"><div class="container"><div class="row"><div class="col-10 p-0"><p class="text-muted text-center py-3 px-0 m-0">W ramach witryny stosujemy pliki cookies celem świadczenia usług na najwyższym poziomie. <a href="'+o.link+'" title="Polityka cookies">Dowiedz się więcej</a>.</p></div><div class="col-2 p-0"><button type="button" class="close p-3 d-block w-100" aria-label="Close"><span aria-hidden="true">&times;</span></button></div></div></div></div>');
    if (readCookie(o.cookie_name) == null) {
      o.parent.prepend(box);
      if (!o.test && o.auto_accept) createCookie(o.cookie_name, 1, 365)
    };
    box.find('.close').click(function(e) {
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
