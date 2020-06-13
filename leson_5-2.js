let employeeSalaries = {
    "Vasya": 5500,
    "Yosya": 5000,
    "Nazariy": 2600,
    "Yura": 6040,
}
  let sum=0
for (let key in employeeSalaries) {
   
 sum += employeeSalaries[key] 
}
console.log(sum)