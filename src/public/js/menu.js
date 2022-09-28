const pluses = Array.from(document.querySelectorAll(".plus"));
const minuses = Array.from(document.querySelectorAll(".minus"));
const quantities = Array.from(document.querySelectorAll(".quantity"));
const datos = new Array(quantities.length);


for(var i = 0; i < quantities.length; i++){
    datos[i] = {
        a : 0,
        plus : pluses[i],
        minus : minuses[i]
    };

    datos[i].plus.index = i;
    datos[i].minus.index = i;

    datos[i].plus.addEventListener("click",(event) => {
        const i = event.currentTarget.index;
        const dato = datos[i];
        dato.a++
        console.log(dato.a);
        quantities[i].textContent = dato.a;
    });

    datos[i].minus.addEventListener("click", (event) => {
        const i = event.currentTarget.index;
        const dato = datos[i];
        dato.a = dato.a > 0 ? dato.a-1:0;
        console.log(dato.a)
        quantities[i].textContent = dato.a;
    });    
}