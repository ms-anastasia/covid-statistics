import styled from "styled-components";


export const SearchForm = styled.form`
width: 400px;
height: 80px;
display: flex;
align-items: center;
position: relative;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
padding: 0px 22px 0px 32px;
backgroung-color: #FFFFFF;
@media (max-width: 1127px) {
margin-left: 50px;
margin-bottom: 20px;
}
`;

export const SearchInput = styled.input`
  font: inherit;
  border: none;
  outline: none;
  font-weight: 400;
    font-size: 40px;
    line-height: 50px;
    color: #B2B2B2;
    
  ::placeholder {
    font-weight: 400;
    font-size: 40px;
    line-height: 50px;
    
    color: #B2B2B2;
}
`;

export const ButtonWrapper = styled.div`
position: absolute;
top: 30%;
right: 0;
`;
