import styled from 'styled-components'

export const CarouselContainer = styled.div`
	display: flex;
	height: 400px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #545454;
	overflow: hidden;
`
export const CarouselWrapper = styled.div`
  width: 100vw;
	margin: 0 auto;
`
export const CarouselList = styled.div`
	display: flex;

	overflow-x: hidden;
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;
	scroll-behavior: smooth;

	transition: all 0.5s ease-in-out;

	@media screen and (max-width: 768px) {
		overflow-x: auto;
	}
`
export const CarouselItem = styled.div`
	flex: none;

	width: 100vw;
	height: 400px;
	scroll-snap-align: start;
	pointer-events: none;
`
export const CarouselImg = styled.img`
	width: 100%;
	height: 100%;

	object-fit: cover;
`
export const SelectorsWrap = styled.div`
	display: flex;
	width: 25%;
	padding: 0 50px;
	justify-content: space-around;
	margin-top: 0;
	align-items: center;
`
export const CarouselLeft = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 0.5px solid;
	background-color: #FFFFFF54;
	opacity: 0.8;

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2.5rem;
	line-height: 2.5rem;
	cursor: pointer;

	::after {
		content: "<";
	}
`
export const CarouselRight = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 0.5px solid;
	background-color: #FFFFFF54;
	opacity: 0.8;

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2.5rem;
	line-height: 2.5rem;
	cursor: pointer;

	::after {
		content: ">";
	}
`
export const CarouselRadio = styled.input`
	width: 10rem;
`
export const ManualNavigation = styled.div`
	position: absolute;
	width: 100%;
	margin-top: -75px;
	display: flex;
	justify-content: center;
`
export const ManualBtn = styled.div`
	border: 2px solid #40D3DC;
	padding: 5px;
	border-radius: 10px;
	cursor: pointer;
	transition: 1s;

	:not(:last-child) {
		margin-right: 40px;
	}

	:hover {
		background: #40D3DC;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`