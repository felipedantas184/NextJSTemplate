import styled from 'styled-components'

export const GalleryContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #545454;
  overflow: hidden;
  padding: 50px 0 50px 0;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
 `
export const GalleryWrapper = styled.div`
	max-width: 1000px;
	min-width: 80vw;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
  	grid-template-rows: auto;
	row-gap: 1.5rem;
	column-gap: .5rem;
	padding: 0 50px;

  	grid-template-areas: 
	  'img-1 img-2 img-3 img-3'
	  'img-1 img-4 img-5 img-6'
	  'img-7 img-7 img-8 img-6';
`
export const GalleryItem = styled.div`
	width: 100%;
	height: 25rem;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	align-items: center;
	justify-content: center;
	border: 1px solid royalblue;
    transition: all 0.5s ease-in-out;
`