import styled from "styled-components";
import Image from 'next/image'

export const HalfContainer = styled.div`
	color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and  (max-width: 768px) {
    max-width: 100vw;
    overflow-x: hidden;
  }
`  
export const HalfWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
	min-height: 100vh;
  max-width: 100vw;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
	overflow-x: hidden;

	@media screen and  (max-width: 768px) {
		padding: 0;
	}
`
export const HalfRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
	width: 100%;
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`
export const Column1 = styled.div`
  padding: 15px;
  grid-area: col1;

	display: flex;
	justify-content: center;
	align-items: center;
	width: 50vw;
	height: 100%;
	background-color: #D33F49;

	@media screen and (max-width: 768px) {
		width: 100vw;
		padding: 50px 40px 0 40px;
	}
`
export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
	
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50vw;
	height: 100%;
	background-color: #13131A;

	@media screen and (max-width: 768px) {
		width: 100vw;
		padding: 0 40px 50px 40px;
	}
`
export const TextWrapper = styled.div`
  max-width: 500px;
  padding-top: 0;
  padding-bottom: 60px;
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
	
	@media screen and (max-width: 768px) {
		margin-top: 60px;
  }
`;
export const Img = styled(Image)`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;