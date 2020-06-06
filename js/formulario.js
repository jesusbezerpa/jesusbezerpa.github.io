 document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('mi_formulario').addEventListener('submit', 
manejadorValidacion)
});

function manejadorValidacion(e) {
e.preventDefault();
var msg = document.getElementById('msg');
msg.innerText = '';
if(this.querySelector('[name=nombre]').value == '') {
console.log('El nombre está vacío');
msg.innerText = 'Debes escribir un nombre';
return;
}
if(! validateEmail(this.querySelector('[name=email]').value)) 
  { console.log('El email no es válido');
  msg.innerText = 'Debes escribir un email 
  válido'; return;
 }
 this.submit();
}

function validateEmail(email) {
  var re =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]
{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
 }
