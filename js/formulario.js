function Validar(contact-form) {
if (f.name.value=="") {
alert("Por favor escriba su Nombre completo");
f.name.focus();
return false;
}
if (f.email.value=="") {
alert("Por favor escriba su correo electrónico");
f.email.focus();
return false;
}
if (f.phone.value=="") {
alert("Por favor escriba su teléfono");
f.subject.focus();
return false;
}
if (f.message.value=="") {
alert("Por favor escriba su Mensaje.");
f.message.focus();
return false;
}