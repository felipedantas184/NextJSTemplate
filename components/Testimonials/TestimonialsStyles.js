import styled from 'styled-components'

export const TestimonialsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  overflow-x: auto;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
 `
export const TestimonialsWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 0 24px;
    flex-wrap: wrap;
    gap: 20px;
`
export const TestimonialsCard = styled.div`
  background: #00C2CB47;
  color: #13131a;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  width: 475px;
  padding:  15px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
export const TestimonialsIcon = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 10px;
  align-self: flex-start;

  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`
export const TestimonialsH1 = styled.h1`
  font-size: 2.5rem;
  color: #13131A;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const TestimonialsStars = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;
    width: 25%;

    @media screen and (max-width: 480px) {
    width: 50%;
  }
`
export const TestimonialsTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 20px;
`
export const TestimonialsH3 = styled.h3`
  margin-top: 16px;
  align-self: flex-end;
  font-weight: 600;
  font-size: 18px;
`

export const TestimonialsP = styled.p`
  font-size: 1rem;
  font-weight: 500;
`