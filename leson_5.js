var user=new Object();
user.name='Пилип';
user.surname='Шевченко';

console.log(user);
user.name='Сергійко';
console.log(user);
delete user.name;
console.log(user);