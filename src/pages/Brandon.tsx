export function Brandon(){
    return (


        <div className="grid-brandon">

        {/* <h1 className="title-Dany">Dany</h1> */}


            <div className="img13"></div>

            <div className="contenido">
               
                Funciona pero ahora esto no trae más preguntas como :

            </div>
            <div className="coments">
                * ¿Cual es el numero mas pequeño que se permite como parametro?<br />
                * ¿Y el mas grande?<br />
                * ¿ Que pasa cuando el reasultado es menor que el numero mas pequeño que se permitido?<br /> 
                * ¿ Que pasa cuando el reasultado es mayor que el numero mas grande que se permitido? <br />

            </div>
                


            <div className="contenido">
                No sabemos en que tipo de dispositivos u ordenadores se va a usar esta calculadora ya que 
                podrían tener un límite de dígitos que soporten por lo que tenemos que considerarlo y poner 
                limites que si sobrepasan manden un error, ahora añadimos estos nuevos criterios de 
                aceptación.
            </div>

            <div className="coments">
                # Aceptacion - Limite Superior = 100 <br />
                # Aceptacion - Limite Superior = 500 <br />
                # Aceptacion - Limite Inferior = -1000 <br />
                # Aceptacion - Limite Inferior = -10<br />
                # Aceptacion - Limite Superior = 100 y parametro mayor que 100, produce ERROR<br /> 
                # Aceptacion - Limite Superior = 100 y resultado mayor que 100, produce ERROR <br />
                # Aceptacion - Limite Inferior = 10 y parametro menor que 10, produce ERROR <br />
                # Aceptacion - Limite Inferior = 10 y resultado menor que 10, produce ERROR <br />

            </div>



     

            <div className="contenido">
          
                Una vez definidos lo escribimos a código creando un test con parámetros de valor mínimo y 
                valor máximo en la clase Calculator.  

            </div>
    


            

            <div className="img14"></div>

            <div className="contenido">
                Como se puede ver esto no compila porque aun no se creó el constructor de Calculator.

                 
            </div>
            <div className="img15"></div>




        
        
    </div>
    );

    
}