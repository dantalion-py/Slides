import { Button, Container,Nav, Navbar as NavBarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function NavBar(){
    return(


    <NavBarBs className="bg-white shadow-sm mb-3">
        <Container>
            <div className="navegaciones">
                
                <Nav className="navegacion">
                     {/* main */}
                     <Nav.Link to="/" as={NavLink}>
                        inicial
                    </Nav.Link>
                    {/* home */}
                    <Nav.Link to="/home" as={NavLink}>
                        Home
                    </Nav.Link>


                    {/* Dany */}
                    <Nav.Link to="/Dany" as={NavLink}>
                        Dany
                    </Nav.Link>


                    {/* Dayeza */}
                    <Nav.Link to="/Dayeza" as={NavLink}>
                        Dayeza
                    </Nav.Link>


                    {/* Simon */}
                    <Nav.Link to="/Simon" as={NavLink}>
                        Simon
                    </Nav.Link>


                    {/* Brandon */}
                    <Nav.Link to="/Brandon" as={NavLink}>
                        Brandon
                    </Nav.Link>


                    {/* Johan */}
                    <Nav.Link to="/Johan" as={NavLink}>
                        Johan
                    </Nav.Link>
                    

                </Nav>
            </div>
           

        </Container>

    </NavBarBs>
    ) 
    
    
}