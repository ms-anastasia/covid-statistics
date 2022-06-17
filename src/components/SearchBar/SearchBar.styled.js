import styled from "styled-components";

// export const SearchHeader = styled.header`
//   top: 0;
//   left: 0;
//   position: sticky;
//   z-index: 1100;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 64px;
//   padding-right: 24px;
//   padding-left: 24px;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   color: #fff;
//   background-color: #3f51b5;
//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
// `;

export const SearchForm = styled.form`
width: 600px;
height: 80px;
display: block;
position: relative;
`;

export const SearchInput = styled.input`
  display: inline-block;

background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
  font: inherit;
  border: none;
  outline: none;
  font-weight: 400;
    font-size: 48px;
    line-height: 56px;
    
    color: #B2B2B2;
    padding: 12px 22px 12px 32px;
  ::placeholder {
    font-weight: 400;
    font-size: 48px;
    line-height: 56px;
    
    color: #B2B2B2;
}
`;

export const ButtonWrapper = styled.div`
position: absolute;
top: 30%;
right: 0;
`;
