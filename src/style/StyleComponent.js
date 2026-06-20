import styled from 'styled-components'

export const Title = styled.h1`
  font-size: var(--font-size-45);
  font-weight: var(--font-weight-500);
  color: var(--dark-primary-color) !important;
  text-align: center;
  padding:100px 0px 50px 0px;
  max-width: 1000px;
  margin: auto;
  font-family: 'MyCustomFont';
    
`

export const Button = styled.button`
  padding: 10px 20px;       
    background-color: var(--primary);
    color: var(--white);
    border: none;
    border-radius: 5px;
    font-size: var(--font-size-20);
    transition: all .3s ease;
    border: 1px solid var(--primary);
    

    &:hover {
        background-color: var(--white);
        color: var(--primary);
    }
`       

// ? for modal
export const ModalBackground = styled.div`
  position: fixed !important;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 🔥 MUHIM */
`;