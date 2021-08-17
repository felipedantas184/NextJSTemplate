import { SponsorContainer, SponsorImg, SponsorWrapper } from "./SponsorStyles";

const Sponsor = () => {
    return ( 
        <SponsorContainer>
            <SponsorWrapper>
                <SponsorImg src="/images/sponsor/sponsor1.png" />
                <SponsorImg src="/images/sponsor/sponsor2.png" />
                <SponsorImg src="/images/sponsor/sponsor3.png" />
                <SponsorImg src="/images/sponsor/sponsor4.png" />
            </SponsorWrapper>
        </SponsorContainer>
     );
}
 
export default Sponsor;