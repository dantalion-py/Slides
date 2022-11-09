export function Simon(){
    return (

        <div className="grid-simon">

            {/* <h1 className="title-Dany">Dany</h1> */}
                
                <div className="contenido">
                    Como anteriormente el método Add retorna 4, este test no pasa está en rojo, porque espera 
                    que le retorne 7, entonces debemos modificar al método 
                    
                </div>
                <div className="img5"></div>
                    
                    

                <div className="contenido">
                    Este método no devuelve 7 como el anterior porque dejaría de funcionar el principio de TDD, 
                    por lo cual generalizamos el método para cualquier valor que se ingrese.
                </div>   
                

                <div className="img6"></div>

                <div className="contenido">
                    Ahora el test está en estado verde, debemos pasar a refactorizar el código, la manera más 
                    simple de identificar es buscar código duplicado, el cual se encuentra en los test
                </div>

                <div className="img7"></div>



         

                <div className="contenido">
                    Realizamos una instancia de la clase Calculator para usarlo como variable común así
                    eliminando el código duplicado. Usar el SetUp no siempre es la opción correcta. Si cada uno de 
                    los tests necesitase de instancias de la calculadora distintas para funcionar, sería conveniente 
                    crearlas en cada uno de ellos en lugar de en la inicialización.
                    Ahora vamos por la resta:
                                

                </div>
                <div className="img8"></div>


                <div className="contenido">
                        El test no compila porque el método no existe por lo que ya sabemos que necesita, también 
                        estamos asumiendo que al primer argumento se le va a restar el 3, ¿tal vez sea obvio pero que 
                        pasaría si fuera al revés? se tendría que considerar si el método permitirá números negativos 
                        entonces lo apuntamos en una libreta para posteriormente considerarlo.

                </div>


                <div className="coments">
                        * ¿Puede ser negativoel resultado de una resta en  nuestra calculadora?<br />
                        * Confirmaer que efectivamente el orden de los parametros<br />
                            produce  resultados diferentes<br />
                       
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

                <div className="contenido">
                    Como esta en rojo creamos el código mínimo para ponerlo en verde.


                </div>

                <div className="img9"></div>
                <div className="img10"></div>

                <div className="contenido">
                    Funciona. ahora necesitamos otro test que nos permita probar otros casos de uso de la función 
                    y miramos a la libreta dado que no sabemos si se permitirá los números negativos se debe de 
                    preguntar al cliente y consensuar con el equipo, una vez aceptado debemos crear un test de 
                    aceptación.

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

                <div className="contenido">
                    Después de haber anotado el nuevo criterio de aceptación escribimos el código necesario para 
                    hacer un test que maneje números negativos


                </div>
                <div className="img11"></div>

                <div className="contenido">
                    Lo mismo que el test anterior pero con argumentos al revés para que devuelva un negativo.
                    Puedes ver que esta en rojo ya que aun solo retorna 2 por lo que ahora pongámoslo a verde.

                </div>
                <div className="img12"></div>

                


            
            
        </div>
    );
}