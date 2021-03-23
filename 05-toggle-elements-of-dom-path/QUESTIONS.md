# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

Pateicoties funkcijai .getElementsByClassName() mēs saņēmām tikai vienu argumentu. Izmantojot funkciju .querySelectorAll() kā argumentu izvēlējāmies ul.second_five li. Tāpēc tika atlasīti tikai tie elementi, kas ir izcelti kā "second_five"