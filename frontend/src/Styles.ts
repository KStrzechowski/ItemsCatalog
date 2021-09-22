import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const fontFamily = "'Segoe UI', 'Helvetica Neue', sans-serif";
export const fontSize = '16px';

export const gray1 = '#383737';
export const gray2 = '#5c5a5a';
export const gray3 = '#857c81';
export const blue1 = '#358EF1';
export const blue2 = '#3178C6';

export const CustomButton = styled.button`
  background-color: ${blue1};
  border-color: black;
  padding: 5px 5px;
  font-size: ${fontSize};
  font-family: ${fontFamily};
  :focus {
    background-color: ${blue2};
  }
  :hover {
    cursor: pointer;
  }
`;

export const CustomLabel = styled.label`
  font-weight: bold;
`;

export const CustomBaseCSS = css`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  border: 1.5px solid ${gray3};
  color: ${gray2};
  padding: 5px 10px;
  width: 150px;
`;

export const CustomInput = styled.input`
  ${CustomBaseCSS}
`;

export const CustomTextArea = styled.input`
  ${CustomBaseCSS}
`;

export const CustomItem = styled.div`
  width: 400px;
  padding: 20px 20px;
  margin: 10px auto 10px auto;
  border: solid darkblue;
  border-radius: 5px;
`;

export const CustomContainer = styled.div`
  width: 600px;
  padding: 20px;
  margin: 50px auto 20px auto;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

export const CustomList = styled.ul`
  list-style: none;
`;
