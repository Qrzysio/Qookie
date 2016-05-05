# Opis
Skrypt wyświetla na górze ekranu DIV informujący o ciasteczkach cookies, zgodnie z przepisami Unii Europejskiej.
Kontener posiada przycisk zamykania "X" w formacie SVG oraz zestaw stylów CSS w pliku css/qookie.css
### Wersja
1.0
### Instalacja
Ręcznie lub bower
```
bower install qookie
```
### Opcje
Tymczasowo na czas testow mozna dodac sobie parametr w kodzie HTML.

```
<script type="text/javascript">
$(function() {
	$.fn.cookiesEU(
	{
		test:		true,
		close:		'Zamknij'
	}
	);
});
</script>
```

Dodatkowo:
Parametr  "test: true" powoduje nie wysylanie ciasteczkaczyli po odswiezeniu strony komunikat nadal bedzie sie pojawiac.

### Zatwierdzanie zmian w GIT

```
git tag -a 1.2 -m "1.2"
git commit -a -m "2016.05.05"

git push origin master
git push origin --tags
```

### Licencja
MIT
