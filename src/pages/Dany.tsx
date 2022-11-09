
export function Dany(){
    return (
        
        <div className="grid-dany">

            {/* <h1 className="title-Dany">Dany</h1> */}
                <div>
                    <div className="contenido">
                    
                    Lo primero a implementar en los primeros sprints será el motor de juego de la aritmética 
                    básica por lo que nos disponemos a realizar los criterios de aceptación para que el cliente lo 
                    valide dichos criterios deben de ser fáciles de interpretar por el cliente para que con solo 
                    verlos diga que si son correctas o no.
                    Los criterios de aceptación iniciales son :<br />
                    </div>

                    <div className="coments">
                        
                        * "2 + 2", devuleve 4<br />
                        * "5 + 4 * 2", devuleve  9<br />
                        * "3 / 2": produce el mensaje de ERROR<br />
                        * "* * 4 - 2": produce el mensaje de ERROR<br />
                        * "* 4 5 - 2": produce el mensaje de ERROR<br />
                        * "* 4 5 - 2 -": produce el mensaje de ERROR<br />
                        * "* 45 - 2 -": produce el mensaje de ERROR<br />
                    </div>
                    
                    <div className="contenido">
                        
                        A través de ejemplos queda claro que los diferentes elementos del comando se operan según 
                        la precedencia, donde la multiplicación y la división se operan antes que la suma y la resta. Y 
                        también sabemos que un resultado con decimales, no se permite porque nuestra aritmética 
                        básica trabaja únicamente con enteros<br />
                    
                        Ahora para empezar toca escoger uno de los criterios de aceptación iniciales y pensar en una 
                        lista de elementos que nos hacen falta para ejecutarlo como por ejemplo una clase que opere 
                        los enteros, luego hacer un pequeño análisis del ejemplo y tratar de definir al menos tres o 
                        cuatro ejemplos más sencillos que podamos convertir en tests de desarrollo para empezar a 
                        hacer TDD<br />
                    </div>



                    <div className="coments">
                        
                        * Aceptacion = "2 + 2", devuleve 4<br />
                        *  Sumar 2 al numero 2, devuleve 4<br />
                        *  Restar 3 al numero 5, devuleve 2<br />
                        *  La cadena " 2 + 2 " tiene dos numeros y un operador que son "2", "2"  y "+" <br />
                        * Aceptacion = "5 + 4 * 2", devuleve  9<br />
                        * Aceptacion = "3 / 2": produce el mensaje de ERROR<br />
                        * Aceptacion = "* * 4 - 2": produce el mensaje de ERROR<br />
                        * Aceptacion = "* 4 5 - 2": produce el mensaje de ERROR<br />
                        * Aceptacion = "* 4 5 - 2 -": produce el mensaje de ERROR<br />
                        * Aceptacion = "* 45 - 2 -": produce el mensaje de ERROR<br />
                    </div>
                </div>
            
                

                <div className="contenido">
                    Una vez hecho eso empieza a programar los tests:

                </div>   
                <div className="img1"></div>



                <div className="contenido">
                    El código no compila porque todavía no hemos creado la clase Calculator. Pero ya hemos 
                    diseñado algo, casi sin darnos cuenta, pensamos en el nombre de la clase, en cómo es su 
                    constructor y en cómo es su primer método. A continuación, escribimos el mínimo código 
                    posible para que el test pase.
                </div>



                <div className="img2"></div>


                <div className="img3"></div>

                <div className="contenido">
                La simplicidad del código para que pase el test en verde nos permite descubrir cualidades de 
                la función esto sirve mas cuando desconocemos precisamente lo que se necesite.
                Ahora probamos con otros argumentos ya que solo este test solo funciona con 2 + 2
                                

                </div>

                <div className="img4"></div>




            
            
        </div>
    
    );
}