const primero = [...document.querySelectorAll("ul >li:first-child")];
const segundo = [...document.querySelectorAll("ul >li:last-child")];

primero.forEach(li => li.textContent = "Primer");
segundo.forEach(li => li.textContent = "ultimo");