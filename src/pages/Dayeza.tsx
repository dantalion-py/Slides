import { render } from "react-dom";
import  "../styles/style.css";
export function Dayeza() {
    return( 
    
    
        <div className="grid-dayeza">

        {/* <h1 className="title-Dany">Dany</h1> */}
            
            <div className="contenido">
                El último test SubstractSettingLimitValues hace lo mismo que los otros test en las que se 
                asumía los límites, por eso lo modificaremos para usarlo tomando en cuenta los nuevos límites
                definidos, encogemos de los criterios el que sobrepasa el valor mínimo y hacemos el test.
                
            </div>
            <div className="img16"></div>
                
                

            <div className="contenido">
                El test falla porque el resultado de la resta da -140 y esta sobrepasando el valor mínimo
                definido, para que el test pase a verde necesitamos consultar los limites para eso haremos 
                otro test específicamente para eso por lo que dejaremos el test en rojo por ahora.

            </div>   
            
            <div className="img17"></div>

        

            <div className="contenido">
                No compila, hay que definir la propiedad getUpperLimit en la clase Calculator
            </div>
            <div className="img18"></div>






            <div className="contenido">
                Hacemos uso de los métodos getters y setters para asignar y recuperar los valores, también
                usaremos otro assert en el mismo test ya que ambas propiedades son para lo mismo y seria 
                innecesario usar otro test individualmente

            </div>
            <div className="img19"></div>


            <div className="contenido">
                Ejecutamos y pasan todos los test menos el test SubstractSettingLimitValues por que aun no 
                decimos que hacer si pasa el valor mínimo así que escribimos el código mínimo para que pase
                a verde.

            </div>
            <div className="contanier-imgDuplic">

                <div className="img20"></div>
            </div>

            <div className="img21"></div>



            <div className="contenido">

                Ahora nos queda probar en el caso de que pase el valor máximo permitido.
            </div>
            <div className="img22"></div>
        
            <div className="contenido">

                Hemos tomado el método Add para no olvidar que estos test que realizamos se aplican a 
                todas las operaciones de la calculadora y no solo a la resta. Implementamos código mínimo
                para que pase a verde:
            </div>
            
            <div className="img22"></div>
            




        </div>
    );
}