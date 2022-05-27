import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import {ButtonNav} from "./StyledComponents"

import styled from "styled-components";


function Navigation(){



  return (
    <NavArea>
     
     <ButtonWrapper>
        <ButtonNav>
        <HomeIcon/>
        
        <NavLink to='/'>Home</NavLink>
        </ButtonNav >
        </ButtonWrapper>
        <ButtonWrapper>

        <ButtonNav>
          <FaceIcon/>
        <NavLink to='/about'>About </NavLink> 
        </ButtonNav>
        </ButtonWrapper>


  
    </NavArea>
  );
}

const NavArea = styled.div`
  display: flex;


  @media only screen 
  and (min-device-width: 374px) 
  and (max-device-width: 897px)
 { 
    justify-content: center;

}
`;

const ButtonWrapper = styled.div`
gap: 20px
`


export default Navigation;