import styled from "styled-components";

export const Text = styled.div`
  font-size: 34px;
  line-height: 2em;
  margin: 0 20px 0 20px;
  font-family: Poppins;
  font-weight: 200;

  @media only screen 
  and (min-device-width: 374px) 
  and (max-device-width: 897px)
 { 
    font-size: 20px;
  line-height: 1.3em;

}
`;

export const TextH1 = styled.div`
  font-size: 34px;
  line-height: 2em;
  margin: 0 20px 0 20px;
  font-family: Poppins;
  font-weight: 600;

  @media only screen 
  and (min-device-width: 374px) 
  and (max-device-width: 897px)
 { 
    font-size: 20px;
  line-height: 1.3em;

}
`;

export const TextH2 = styled.div`
  font-size: 34px;
  line-height: 2em;
  margin: 0 20px 0 20px;
  font-family: Poppins;
  font-weight: 400;

  @media only screen 
  and (min-device-width: 374px) 
  and (max-device-width: 897px)
 { 
    font-size: 20px;
  line-height: 1.3em;

}
`;

export const ButtonPrimary = styled.div`
  border-radius: 10px;
  font-family: Poppins;
  font-weight: 400;
  color: black;
  width: auto;
  height: auto;
  padding: 20px;
  background-color: #79DAE8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media only screen 
  and (min-device-width: 374px) 
  and (max-device-width: 897px)
 {
    font-size: 15px;
    padding: 10px;
}
`;

export const ButtonNav = styled.div`
  font-family: Poppins;
  font-weight: 400;
  color: black;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  padding-right: 20px;
  justify-content: center;
  cursor: pointer;
  font-size: 30px;

  @media only screen 
  and (min-device-width: 374px) 
  and (max-device-width: 897px)
 {
    font-size: 15px;
    margin-bottom: 10px;
}
`;
