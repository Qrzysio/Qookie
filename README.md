# Opis
Skrypt wyświetla na górze ekranu `div` informujący o ciasteczkach cookies, zgodnie z przepisami Unii Europejskiej.
Kontener posiada przycisk zamykania `X` oraz m.in. możliwość podania odnośnika do polityki cookies.

Style oparte na Bootstrap 4 (beta 1).

Wymagania: Bootstrap 4, jQuery

### Instalacja
Ręcznie, Bower lub npm.

Bower
```
bower install qookie
```

npm
```
npm install qookie
```

### Opcje

| Wartość       | Typ            | Domyślnie                                                                             |
|---------------|----------------|---------------------------------------------------------------------------------------|
| link          | url (string)   | `$(location).attr('protocol')+'//'+$(location).attr('hostname')+'/polityka-cookies/'` |
| parent        | HTML tag       | `$('body')`                                                                           |
| cookie_name   | string         | `Qookie`                                                                              |
| auto_accept   | boolean        | `true`                                                                                  |
| test          | boolean        | `false`                                                                                 |

### Użycie

Przykładowe użycie.

```
<script type="text/javascript">
$(function() {
    $.fn.Qookie(
    {
        link: 'http://example.com/polityka-cookies-danej-witryny/'
    });
});
</script>
```

W czasie testów możemy dopisać parametr `test`.
```
<script type="text/javascript">
$(function() {
    $.fn.Qookie(
    {
        test: true.
        link: 'http://example.com/polityka-cookies-danej-witryny/'
    });
});
</script>
```
### Licencja
MIT
