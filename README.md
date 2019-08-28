
<p align="center">
  <img height="300" src="src/assets/img/logo.png">
</p>

# BookRobot
Aplikacja zbierająca informacje o dostępnych przecenionych książkach w różnych bibliotekach internetowych. Ceny pobierane są poprzez zdrapywanie stron internetowych oraz za pośrednictwem interfejsów REST API. Dane na temat książek i historii ich cen zapisywane są do bazy danych.
---
***
## Zanim stworzymy projekt

Zanim zaczniemy, upewnij się czy masz zaintalowanego Node.js oraz npm package manager.


#### Node.js

Angular wymaga Node.js w wersji 10.9.0 lub starszej:

- Aby sprawdzić wersje, odpal `node -v` w terminalu
- Aby zainstalować Node.js odwiedź nodejs.org


#### NPM

Aplikacje angularowe opierają się na zależnościach i bibliotekach zarządzanych za pomocą npm package manager.

https://docs.npmjs.com/cli/install link do instalacji.

Aby sprawdzić czy posiada się zainstalowanego klienta npm należy odpalić `npm -v` w terminalu

#### Angular Cli

Używasz Angular CLI do tworzenia projektów, generowania kodu aplikacji i biblioteki oraz wykonywania różnych bieżących zadań programistycznych, takich jak testowanie, pakowanie i wdrażanie.

Aby zainstalować CLI za pomocą npm, otwórz okno terminalu i wprowadź następujące polecenie: `npm install -g @angular/cli`


## Odpalenie aplikacji

Aby odpalić aplikację należy wprowadzić następujące polecenia:

 `ng build --aot --prod`

a następnie 

 `node server.js` 

Aplikacja powinna działać pod adresem http://localhost:8080
