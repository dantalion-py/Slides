export function Johan(){
    return (
        

        <div className="grid-johan">

         {/* <h1 className="title-Dany">Dany</h1> */}
            <div className="img24"></div>

            <div className="contenido">
                Funciona pero pueden notar que el método Add no comprueba en caso de que sobrepase el 
                valor mínimo y esto es posible como por ejemplo - 250 + 10 = - 240 , el resultado sobrepasa el 
                valor mínimo y el test podría fallar por lo que debemos de hacer esas comprobaciones para 
                que no caiga en esos casos.
            </div>
                
            <div className="img25"></div>


            <div className="contenido">
                Aun falla y es porque debemos poner condiciones que en caso de que se cumplan manden un 
                error indicando que sobrepaso los límites establecidos.

            </div>   
            <div className="img26"></div>


        

            <div className="contenido">
                También debemos hacer los mismo, pero tomando en cuenta a la inversa.

            </div>
            <div className="img27"></div>






            <div className="contenido">
                Añadimos condiciones que validen para pasarlo a verde.
            </div>
         
            
            <div className="img28"></div>


            
            <div className="contanier-imgDuplic">

                <div className="img29"></div>
            </div>


            <div className="contenido">
                Y funciona, ahora la resta debería de hacer las mismas comprobaciones.

            </div>
            <div className="img30"></div>



            <div className="contenido">
                El test no pasa. Lo más rápido sería copiar las líneas de las condiciones que validan de la suma 
                y pegarlo en la resta. En realidad, podemos hacerlo, pero estaríamos creando código duplicado 
                en la clase Calculator por lo que es hora de hacer una refactorización y extraer un método que 
                cumpla con el principio SINGLE que se encargue de hacer las validaciones correspondientes.

            </div>
           
            <div className="img31"></div>

            <div className="contenido">
                Llamamos al método validateArgs en cada método y ahora mejoramos nuestra lista de
                criterios en base al nuevo método de validación :

         
            </div>
            <div className="coments">
                * A: El primer argumento sobrepasa el limite superior<br />
                * B: El primer argumento sobrepasa el limite inferior<br />
                * C: El segundo argumento sobrepasa el limite superior<br />
                * D: El segundo argumento sobrepasa el limite inferior<br />
                * E: El resultado de una operacion sobrepasa el limite superior<br />
                * F: El resultado de una operacion sobrepasa el limite inferior<br />
                * Todos los casos de uso anteriores se aplican a todas las operaciones aritméticas<br />
            </div>
         
            <div className="contenido">
                Y nos damos cuenta de que el ultimo criterio aun no lo pasa porque aún no probamos que la 
                resta valide sus argumentos, necesitamos otro test para hacerlo.

         
            </div>
            <div className="img32"></div>
            <div className="contenido">
                Aprovechamos para cambiar Add y Substract por el método ValidateArgs para asegurarnos de 
                que valide los limites y no el resultado en si por que ya esta comprobado por otros test que 
                hicimos y como podemos ver los dos test pasan a verde
         
            </div>

        </div>
    );
}