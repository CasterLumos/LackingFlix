import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'
import { Link } from 'react-router-dom'

function Menu() {
    return (
      <nav className="Menu">
          <Link  to="/">
            <img className="Logo" src={Logo} alt="LackingFlix Um novo serviço de Streaming"/>
          </Link>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo video
        </Button>
      </nav>
    );
  }
  
  export default Menu;
  