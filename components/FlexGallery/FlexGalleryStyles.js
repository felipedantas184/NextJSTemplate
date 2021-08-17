import styled from 'styled-components'

export const FlexGalleryContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #545454;
  overflow: hidden;
  padding: 50px 0 50px 0;
 `
export const FlexGalleryWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	padding: 0 50px;
    gap: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
      justify-content: center ;
      width: 100%;
  }
`
export const FlexGalleryItem = styled.div`
	min-width: 210px;
	height: 12rem;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	align-items: center;
	justify-content: center;
    transition: all 0.5s ease-in-out;

    :hover {
        opacity: 1;
    }

    @media screen and (max-width: 600px) {
      min-width: 100%;
    }
`