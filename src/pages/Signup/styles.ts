import styled from 'styled-components';
import { shade } from 'polished';

// import logoImg from '../../assets/iservicesLogo.png';

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  max-width: 900px;

  img{
    height: 135px;
    display: flex;
  }
  
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    
    h1 {
      margin-bottom: 24px;
    }
    
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }  
  
  > a {
    color: #1c1e2a;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 5px;
    }
   
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }

`;

// export const Background = styled.div`
//   flex: 1;
//   background: url(${signUpBackground}) no-repeat center;
//   background-size: cover;
// `;
