var mail = prompt('Sign in with your email address')

var registered = [
    'pincopallo@boolean.it',
    'topogigio@boolean.it',
    'pinocchio@boolean.it',
    'wella@boolean.com',
    'chisei@boolean.it',
    'stoinfissa@boolean.it',
    'questavitamidistrugge@boolean.it'
];

var result = false;

for (var i = 0; i <registered.length; i++) {
  if (registered[i] === mail) {
    var result = true;
    i = mail.length;
  }
}

console.log(registered);
console.log(result);

if (result === true) {
  console.log("accesso consentito");
} else {
  console.log("accesso bloccato");
  document.getElementById("resultjsceck").style.visibility='visible'
}
