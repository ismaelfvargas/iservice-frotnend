import React from 'react';
import { Headers } from './styles';
import logoImg from "../../assets/logo.png";


const Header: React.FC = () => {

    return (
            <Headers>
            <img src={logoImg} alt="iservices" />
            </Headers>
    );
};

export default Header;
