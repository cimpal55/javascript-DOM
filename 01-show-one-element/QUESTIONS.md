# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Tā, kā šie elementi mainās tikai īslaicīgi, visas izmaiņas tiks izdzēstas, tiklīdz pārlādēsit lapu, jūs saņemsiet tās sākotnējo saturu no servera. Lai atcerētos slēptos elementus, jums būs jāizmanto sīkfails

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Šī funkcija ielādē visu JS, kad lapa tiek ielādēta. Bez šīs funkcijas pārējie nedarbosies.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

Metode addEventListener ļauj piešķirt notikumu apstrādātājus elementam. Ar tās palīdzību jūs varat norādīt, piemēram, kas jādara, noklikšķinot uz pogas, vai kas jādara, ierakstot teksta laukā.
