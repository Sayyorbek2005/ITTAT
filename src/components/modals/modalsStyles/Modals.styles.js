import styled from "styled-components";

export const FormWrapper = styled.div`
 border: 1px solid var(--white);
 background-color: var(--white);
 color: var(--black);
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin: auto;
  /* margin: 0px 10px; */

  form {
    width: 100%;
    
     button{
      width: 100%;
      transition: all .3s ease;

      &:hover{
        transform: translateY(-10px);
      }
     }
  }
`;

export const Title = styled.h2`
  text-align: left;
  font-size: var(--font-size-35);
  color: var(--primary);
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  text-align: left;
  font-size: var(--font-size-20);
  color: var(--e5);
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #ccc")};
  outline: none;
  font-size: 18px;
  
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: ${(props) => (props.error ? "2px solid red" : "1px solid #ccc")};
  outline: none;
  
`;

