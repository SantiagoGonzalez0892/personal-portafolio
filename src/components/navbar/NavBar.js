import {Button, Container, Nav, NavItem, NavList ,Title} from "./style";

function Navbar () {
  return (
    <Container>
      <Nav>
        <Title>
          <span>S</span>antiago 
          <span> </span>
          <span>G</span>onzalez
        </Title>
        <NavList>
          <NavItem className=""> <a href="#home">Home</a> </NavItem>
          <NavItem className="active"> <a href="#about">About</a> </NavItem>
          <NavItem className=""> <a href="#Contacto">Contacto</a> </NavItem>
          <NavItem className=""> <a href="#curriculum">Curriculum</a> </NavItem>
        </NavList>
        <Button>
          <span></span>
        </Button>
      </Nav>
    </Container>
  );
}


export default Navbar;
