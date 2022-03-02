let str = `<h4>Esperienze</h4>
<h5>Elettricista</h5>
<p>Dal 30/05/16 al 19/06/16 presso Elettrocentro di jesi AN (stage)</p><br>
<h5>Operaio</h5>
<p>Dal 06/2019 al 08/2019 Operaio, uso di macchina da cucire lineare (fodere braccia/tasche interne),
CONFEZIONI SOBIA filottano (AN)</p><br>
<h5>Addetto vendite</h5>
<p>Dal 20/07/2021 al 30/09/2021 Commesso presso boutique di abbigliamento DREAM SARL Francia.</p>
<h4>Istruzione e formazione</h4>
<p>Diploma di maturità perito tecnico elettronico/elettrotecnico  presso ITIS G. MARCONI (jesi AN)</p>
<h4>lingue</h4>
<ul>
  <li>Italiano (madrelingua)</li>
  <li>Inglese (buono)</li>
  <li>Francese (base)</li>
</ul>
<h4>Competenze</h4>
<ul>
  <li>Cablaggio di impianti civile.</li>
  <li>Lettura schemi elettrici</li>
  <li>Discrete capacità di programmazione in: C , JAVASCRIPT, HTML/CSS.</li>
</ul>`;


//function declaretion
function copy(id){
  let el = document.getElementById(id);
  let textCopy = document.createElement("input");
  textCopy.style.display = "hidden";
  document.body.appendChild(textCopy);
  textCopy.value = el.text;
  textCopy.select();
  textCopy.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + textCopy.value);
  document.body.removeChild(textCopy);
}



let isTag, text, i = 0;
function type(){
  text = str.slice(0, ++i);
  if (text === str) return;
  document.getElementById("ctn").innerHTML = text;
  let char = text.slice(-1);
  if(char === '<') isTag = true;
  if(char === '>') isTag = false;

  if (isTag) return type();
  window.scrollTo({
    top:   document.getElementById("ctn").getBoundingClientRect().height,
    behavior: 'smooth'
  });
  setTimeout(type, 5);
}

//end function declaration






//copy buttons
document.querySelector("#emailBtn").addEventListener("click", function() {copy("email");});
document.querySelector("#phoneBtn").addEventListener("click", function() {copy("phone");});



//About me button
let btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
  document.getElementById("ctn").classList.toggle("show");
  type();
  window.scrollTo({
    top: btn.getBoundingClientRect().y + window.pageYOffset,
    behavior: 'smooth'
  });
});

//projects button
let btn2= document.querySelector("#btn2");
btn2.addEventListener("click", function(){
  document.getElementById("ctn2").classList.toggle("show");
  window.scrollTo({
    top: btn2.getBoundingClientRect().y + window.pageYOffset,
    behavior: 'smooth'
  });
});

//contacts button
let btn3= document.querySelector("#btn3");
btn3.addEventListener("click", function(){
  document.getElementById("ctn3").classList.toggle("show");
  window.scrollTo({
    top: btn3.getBoundingClientRect().y + window.pageYOffset,
    behavior: 'smooth'
  });
});

// Close the dropdown menu
window.onclick = function(event) {
if (!event.target.matches('.dropdown-content')) {
  let dropdowns = document.getElementsByClassName("");
  let i;
  for (i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
      }
    }
  }
}
