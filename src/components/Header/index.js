import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assests/logo.png';
import './style.css';

export default function Header() {
    const reserveSize = useSelector(state => state.reserve);

    return (
        <header className='container'>
            <Link to="/">
                <img className='logo' src={logo} alt="logo do projeto"/>
            </Link>

            <Link className='reserva' to="/reservas">
                <div>
                    <strong>Minhas reservas</strong>
                    <span>{reserveSize.length}</span>
                </div>
            </Link>

        </header>
    );
}