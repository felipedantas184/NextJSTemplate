import styled from 'styled-components'

export const PricingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
 `
export const PricingWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`
export const PricingCard = styled.div`
  background: ${({yellow, green, blue}) => (yellow ?  '#F8A13F' : green ? "#75c181" : blue ? '#58bbee' : "#fff")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  max-width: 275px;
  height: 400px;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  transform: scale(${({highlight}) => (highlight ? "1.025" : "1.0")});
  text-align: center;


  &:hover {
    transform: scale(${({highlight}) => (highlight ? "1.075" : "1.05")});
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`
export const PricingH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const HighlightBlock = styled.div`
  width: 275px;

  padding: 4px 8px;
  background: #FFF;
  position: absolute;
  margin-top: -30px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  color: #000;
  font-size: 12px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PricingH3 = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0;
  min-height: 60px;
`
export const PricingSpan = styled.span`
  font-size: 0.8rem;
  text-align: center;
  font-weight: normal;
  display: inline-block;
  line-height: 3;
`
export const PricingFigure = styled.div`
  font-size: 46px;
  margin-bottom: 15px;
`
export const PricingCurrency = styled.span`
  vertical-align: super;
	font-size: 26px;
	-webkit-opacity: 0.6;
	-moz-opacity: 0.6;
	opacity: 0.6;
`
export const PricingNumber = styled.span`
  font-weight: 500;
`
export const PricingList = styled.ul`
  list-style: none;
`
export const ListItem = styled.li`
	margin-bottom: 8px;
`
export const BtnWrap = styled.div`
  display:flex;
  justify-content: flex-start;
`;
//**export const PricingDetails = styled.a`margin-bottom: 8px;font-size: 14px;`
