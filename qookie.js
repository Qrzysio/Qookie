(function ($) {
    "use strict";

    if (!$) {
        return;
    }

    $.fn.Qookie = function (options) {
        var settings = $.extend({
            link: "/prywatnosc/",
            parent: $("body"),
            cookie_name: "Qookie",
            auto_accept: true,
            test: false
        }, options);

        function createCookie(name, value, days) {
            var cookie = name + "=" + value;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                cookie += "; expires=" + date.toGMTString();
            }
            document.cookie = cookie + "; path=/";
        }

        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(";");
            var i, c;

            for (i = 0; i < ca.length; i += 1) {
                c = ca[i];
                while (c.charAt(0) === " ") {
                    c = c.substring(1, c.length);
                }

                if (c.indexOf(nameEQ) === 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
            return null;
        }

        $("#Qookie").remove();
        var box = $('<div style="background-color:#f3f3f3;padding:25px;margin:0;clear:both;display:block;z-index:10000;" id="Qookie">' +
    '<div style="max-width:1000px;display:block;margin:0 auto;">' +
        '<div style="display:block;clear:both;">' +
            '<button style="border:none;background:none;line-height:60px;padding:0px 10px;margin:-25px;font-size:50px;font-weight:bold;float:right;cursor:pointer;display:block;color:#999;" type="button" class="close" aria-label="Zamknij"><span aria-hidden="true">&times;</span></button>' +
            '<div style="width:90%;display:inline-block;color:#888;font-size:16px;font-family:sans-serif;">' +
                '<p style="margin:0;padding:0;line-height:normal;">W ramach witryny stosujemy pliki cookies celem świadczenia usług na najwyższym poziomie. <a href="' + settings.link + '" style="color:#666;text-decoration:underline;" title="Polityka cookies" target="_blank">Dowiedz się więcej</a>.</p>' +
            '</div>' +
        '</div>' +
    '</div>' +
'</div>');

        if (readCookie(settings.cookie_name) === null) {
            settings.parent.prepend(box);

            if (!settings.test && settings.auto_accept) {
                createCookie(settings.cookie_name, 1, 365);
            }
        }

        box.find(".close").click(function () {
            if (!settings.test && !settings.auto_accept) {
                createCookie(settings.cookie_name, 1, 365);
            }
            box.slideUp(350);
        });
    };
}(jQuery));
