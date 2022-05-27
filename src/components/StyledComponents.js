import styled from "styled-components";

export const Text = styled.div`
  font-size: 34px;
  line-height: 2em;
  margin: 0 20px 0 20px;

  @media only screen 
  and (min-device-width: 374px) 
  and (max-device-width: 897px)
 { 
    font-size: 20px;
  line-height: 1.3em;

}
`;

export const ButtonPrimary = styled.div`
  border-radius: 5px;
  color: grey;
  width: 200px;
  height: 50px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
