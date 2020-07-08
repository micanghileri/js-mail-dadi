var mail = prompt('Inserisci il tuo indirizzo e-mail')

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
