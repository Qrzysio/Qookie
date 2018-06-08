# Opis
Plugin wyświetla na górze ekranu kontener (`div`) informujący o używaniu przez witrynę ciasteczek cookies zgodnie z przepisami Unii Europejskiej oraz zachęca do zapoznania się z polityką prywatności. Skrypt jest idealnym narzędziem dla małych stron internetowych, tzw. wizytówek, na których nie jest prowadzone profilowanie, a pliki cookies są używane wyłącznie w celach statystycznych, podtrzymywania sesji czy umożliwienia logowania. Skrypt jest zgodny z zasadami RODO, przed jego wdrożeniem upewnij się jednak, że będzie odpowiedni dla twojej witryny.

Treść komunikatu:
> W [Polityce prywatności](https://www.example.com) zawarliśmy szczegółowe informacje z zakresu przetwarzania danych osobowych zbieranych podczas korzystania przez internautów z naszej witryny. Zachęcamy do [zapoznania się z nimi](https://www.example.com).
>
> Używamy plików cookies i podobnych technologii zgodnie z [Polityką prywatności](https://www.example.com). Możesz wyłączyć ten mechanizm w ustawieniach przeglądarki.

Kontener posiada przycisk zamykania `X` oraz m.in. możliwość podania odnośnika do polityki prywatności. Skrypt jest pluginem jQuery. Wygląd komunikatu został oparty na własnych stylach CSS, jest responsywny, działa poprawnie z Bootstrapem i innymi frameworkami CSS, nie zasłania strony, wyświetla się ponad głównym kontenerem.

### Instalacja
npm
```
npm install qookie
```

yarn
```
yarn add qookie
```

CDN
```
<script src="https://cdn.jsdelivr.net/npm/qookie@4/qookie.min.js"></script>
```


### Opcje

| Wartość       | Typ            | Domyślnie               |
|---------------|----------------|-------------------------|
| link          | url (string)   | `'/prywatnosc/'`        |
| parent        | HTML tag       | `$('body')`             |
| cookie_name   | string         | `Qookie`                |
| auto_accept   | boolean        | `true`                  |
| test          | boolean        | `false`                 |

### Użycie

Przykładowe użycie.

```
<script>
$(function() {
  $().Qookie({
    link: 'https://www.mojadomena.pl/polityka-prywatnosci/'
  });
});
</script>
```

Na czas testów można ustawić parametr `test` jako `true`, wtedy skrypt nie wysyła ciasteczka i można łatwiej zmieniać np. ostylowanie.
```
<script>
$(function() {
    $().Qookie({
        test:  true,
        link: 'https://www.mojadomena.pl/polityka-prywatnosci/'
    });
});
</script>
```
### Licencja
MIT
