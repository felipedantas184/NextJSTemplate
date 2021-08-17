import styled from 'styled-components'

export const SponsorContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #545454;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 400px;
  }

  @media screen and (max-width: 480px) {
    height: 200px;
  }
 `
export const SponsorWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
	row-gap: 2.5rem;
	column-gap: 5rem;
	justify-items: center;
	align-items: center;
	padding: 0 50px;

	@media screen and (max-width: 786px) {
		grid-template-columns: 1fr 1fr;
		padding: 0 20px;
		column-gap: 2.5rem;
	}
`
export const SponsorImg = styled.img`
	width: 150px;

	@media screen and (max-width: 480px) {
		width: 90px;
	}
`