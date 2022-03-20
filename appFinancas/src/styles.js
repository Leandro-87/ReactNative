import styled from 'styled-components/native';

export const Container = styled.View `
   flex:1; justify-content:center; align-items:center; background-color:#dfdfdf; `;

export const Saudacao = styled.Text `
   font-size:25px; font-weight:bold; color: ${props => props.cor}; `;

export const Btn = styled.TouchableOpacity `
 background-color:#d780fd; padding:10px 20px 10px 20px; border-radius:500px; margin: 20px;`;

export const BtnTxt = styled.Text `
   font-size:18px; color:#FFF `;