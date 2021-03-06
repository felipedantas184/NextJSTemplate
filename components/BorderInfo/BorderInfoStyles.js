import styled from "styled-components";
import Image from 'next/image'

export const BorderInfoContainer = styled.div`
	color: #fff;
  background: ${({lightBg}) => (lightBg ? '#fff' : '#010606')};
	padding: 0 24px 0 24px;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

  @media screen and  (max-width: 768px) {
    padding: 100px 0;
    max-width: 100vw;
    overflow-x: hidden;
  }
`  
export const BorderInfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100% auto;
	padding: 0;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;

	border-radius: 50px;
	border: 5px solid gray;
	margin-top: 50px;
	margin-bottom: 50px;

	@media screen and  (max-width: 768px) {
    border: none;
    padding: 0 24px;
  }
`
export const BorderInfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`
export const Column1 = styled.div`
  padding: 0 15px 0 0;
  grid-area: col1;
`
export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
`
export const TextWrapper = styled.div`
  max-width: 540px;

	box-shadow: 
    12px 12px 16px 0 rgba(120, 120, 120, 0.25);
	border-radius: 40px 60px 60px 40px;
	background-color: gray;
	padding: 30px 30px 60px 30px;
`
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const Subtitle  = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
export const BtnWrap = styled.div`
  display:flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Img = styled(Image)`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;