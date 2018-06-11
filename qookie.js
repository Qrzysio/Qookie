/*! Qookie 4.0.3 */
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
        var button_width, container_width, button_padding;
        if (screen.width < 500) {
            button_width = '100%';
            container_width = '100%';
            button_padding = '0';
        } else {
            button_width = '9%';
            container_width = '90%';
            button_padding = '0.5em 0';
        }

        var box = $('<div style="background-color:#f4f4f4;padding:10px;margin:0;clear:both;display:block;z-index:100000;font-size:16px;overflow:hidden;" id="Qookie">' +
    '<div style="max-width:1000px;display:block;margin:0 auto;">' +
        '<div style="display:block;clear:both;">' +
            '<div style="width:' + container_width + ';display:inline-block;color:#777;font-size:16px;font-family:sans-serif;">' +
                '<p style="margin:0;padding:5px;line-height:1.5em;color:#777;">W <a href="' + settings.link + '" style="color:#777;text-decoration:underline;" target="_blank">Polityce prywatności</a> zawarliśmy szczegółowe informacje z zakresu przetwarzania danych osobowych zbieranych podczas korzystania przez internautów z naszej witryny. Zachęcamy do <a href="' + settings.link + '" style="color:#777;text-decoration:underline;" target="_blank">zapoznania się z nimi</a>.</p>' +
                '<p style="margin:0;padding:5px;line-height:1.5em;color:#777;">Używamy plików cookies i podobnych technologii zgodnie z <a href="' + settings.link + '" style="color:#777;text-decoration:underline;" target="_blank">Polityką prywatności</a>. Możesz wyłączyć ten mechanizm w ustawieniach przeglądarki.</p>' +
            '</div>' +
            '<button style="width:' + button_width + ';clear:both;border:none;background:none;line-height:1em;padding:' + button_padding + ';margin:0px;font-size:3em;font-weight:bold;cursor:pointer;display:inline-block;color:#999;" type="button" class="close" aria-label="Zamknij"><span aria-hidden="true">&times;</span></button>' +
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
