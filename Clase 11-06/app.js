/*
let num = prompt("Ingrese el número.");
let num2 = prompt("Ingrese el siguiente número.")

let suma = num + num2;

alert(suma)



if(num > 1000)
{
alert("El número que ingresaste es mayor a 1000.");
}
else if (num == "Hola")
{
    alert("Ingresaste hola, no un número.");
}
else if(num >= 10 && num <= 50)
{
    alert("El número esta en el rango de 10 y 50.");
}
else
{
    alert("No pusiste nada.")
}
*/

let num, suma, aux, resultado;
resultado = 0;
while(num != "SALIR" || num != "salir")
    {
        num = parseInt(prompt("Ingresa un número. Escriba SALIR para salir del ciclo."));
        if(num =="salir" || num =="SALIR")
        {
            break;
        }
        
    
        resultado += num;
        alert(resultado);
          
    }