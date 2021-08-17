import {TestimonialsContainer, TestimonialsH1, TestimonialsWrapper, TestimonialsCard, TestimonialsIcon, TestimonialsTextWrap, TestimonialsH3,TestimonialsP, TestimonialsStars} from './TestimonialsStyles'
import { Slide } from "react-awesome-reveal";
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

const Testimonials = () => {
  return (
    <TestimonialsContainer id='Testimonials'>
      <TestimonialsH1>Our Testimonials</TestimonialsH1>
      <TestimonialsWrapper>
        <Slide triggerOnce direction="up" duration={1000}>
          <TestimonialsCard>
            <TestimonialsIcon src="/images/felipegit.jpg" />
            <TestimonialsTextWrap>
                <TestimonialsStars>
                    <BsStarFill color="#00C2CB" /><BsStarFill color="#00C2CB" /><BsStarFill color="#00C2CB" /><BsStarFill color="#00C2CB" /><BsStarHalf color="#00C2CB" />
                </TestimonialsStars>
                <TestimonialsP>Simplesmente incrível essa realização de vocês! Foi um prazer degustar desse delicioso prato de camarão!</TestimonialsP>
                <TestimonialsH3>Felipe Dantas</TestimonialsH3>
            </TestimonialsTextWrap>
          </TestimonialsCard>

          <TestimonialsCard>
            <TestimonialsIcon src="/images/felipegit.jpg" />
            <TestimonialsTextWrap>
                <TestimonialsStars>
                    <BsStarFill color="#00C2CB" /><BsStarFill color="#00C2CB" /><BsStarFill color="#00C2CB" /><BsStarFill color="#00C2CB" /><BsStarHalf color="#00C2CB" />
                </TestimonialsStars>
                <TestimonialsP>Simplesmente incrível essa realização de vocês! Foi um prazer degustar desse delicioso prato de camarão!</TestimonialsP>
                <TestimonialsH3>Felipe Dantas</TestimonialsH3>
            </TestimonialsTextWrap>
          </TestimonialsCard>

          <TestimonialsCard>
            <TestimonialsIcon src="/images/felipegit.jpg" />
            <TestimonialsTextWrap>
                <TestimonialsStars>
                    <BsStarFill color="#00C2CB" /><BsStarFill color="#00C2CB" /><BsStarFill color="#00C2CB" /><BsStarFill color="#00C2CB" /><BsStarHalf color="#00C2CB" />
                </TestimonialsStars>
                <TestimonialsP>Simplesmente incrível essa realização de vocês! Foi um prazer degustar desse delicioso prato de camarão!</TestimonialsP>
                <TestimonialsH3>Felipe Dantas</TestimonialsH3>
            </TestimonialsTextWrap>
          </TestimonialsCard>

          <TestimonialsCard>
            <TestimonialsIcon src="/images/felipegit.jpg" />
            <TestimonialsTextWrap>
                <TestimonialsStars>
                    <BsStarFill color="#00C2CB" /><BsStarFill color="#00C2CB" /><BsStarFill color="#00C2CB" /><BsStarFill color="#00C2CB" /><BsStarHalf color="#00C2CB" />
                </TestimonialsStars>
                <TestimonialsP>Simplesmente incrível essa realização de vocês! Foi um prazer degustar desse delicioso prato de camarão!</TestimonialsP>
                <TestimonialsH3>Felipe Dantas</TestimonialsH3>
            </TestimonialsTextWrap>
          </TestimonialsCard>
        </Slide>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials
