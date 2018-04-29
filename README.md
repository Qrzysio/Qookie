# Opis
Plugin wyświetla na górze ekranu kontener (`div`) informujący o uzywaniu przez witrynę ciasteczek cookies, zgodnie z przepisami Unii Europejskiej.

Treść komunikatu:
> W ramach witryny stosujemy pliki cookies celem świadczenia usług na najwyższym poziomie. [Dowiedz się więcej](https://www.example.com).

Kontener posiada przycisk zamykania `X` oraz m.in. możliwość podania odnośnika do polityki cookies.
Najnowsza wersja jest pluginem jQuery (wcześniej funkcja). Skrypt oparty został na własnych stylach CSS, jest responsywny, działa poprawnie z Bootstrapem i innymi frameworkami CSS.

### Instalacja
Ręcznie lub npm.

npm
```
npm install qookie
```

yarn
```
yarn add qookie
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

  $().Qookie({
    link: 'https://www.mojadomena.pl/polityka-cookies/'
  });

});
</script>
```

Na czas testów można ustawić parametr `test` jak `true`, wtedy skrypt nie wysyła ciasteczka i można łatwiej zmieniać np. ostylowanie.
```
<script>
$(function() {

    $().Qookie({
        test:   true,
        link: 'https://www.mojadomena.pl/polityka-cookies/'
    });

});
</script>
```
### Licencja
MIT
