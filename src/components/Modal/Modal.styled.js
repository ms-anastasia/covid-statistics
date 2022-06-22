import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContent = styled.div`
width: 600px;
height: 400px;
background: #FFFFFF;
border-radius: 20px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ModalButton = styled.button`
width: 171px;
height: 49px;
color: white;
font-size: 24px;
line-height: 28px;
border: none;

background-color: #2196F3;
border-radius: 20px;
:hover{
    background-color: white;
    color: #2196F3;
    border: 2px solid #2196F3;
}
`;

export const CountryName = styled.h2`
text-align: center;
font-size: 48px;
line-height: 56px;
margin-bottom: 38px;
`;
export const CountryDescriptionContainer= styled.ul`
width: 100%;
`;
export const CountryDescription = styled.li`
display: flex;
flex-direction: row;
// justify-content: space-between;
margin-bottom: 49px;
`;

export const TextWrapper = styled.div`
width: 100%
display: flex;
flex-direction: row;
justify-content: space-between;
margin-left: 29px;
`;

export const TextDescription = styled.span`
display: inline-block;
`;

