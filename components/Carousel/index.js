import { useEffect, useState } from "react";
import { CarouselContainer, CarouselImg, CarouselItem, CarouselLeft, CarouselList, CarouselRadio, CarouselRight, CarouselWrapper, ManualBtn, ManualNavigation, SelectorsWrap } from "./CarouselStyles";

const Carousel = () => {
    const [scrollX, setScrollX] = useState(0)
    const [radioValue, setRadioValue] = useState("radio1")

    const handleScrollFirst = () => {
        setScrollX(0)
    }
    const handleScrollSecond = () => {
        setScrollX((window.screen.width)*1)
    }
    const handleScrollThird = () => {
        setScrollX((window.screen.width)*2)
    }
    const handleScrollFourth = () => {
        setScrollX((window.screen.width)*3)
    }

    useEffect(() => {
        setTimeout(function() {
            handleScrollFirst();
            setRadioValue("radio1");
        }, 10000);       
        setTimeout(function() {
            handleScrollSecond();
            setRadioValue("radio2");
        }, 2500);
        setTimeout(function() {
            handleScrollThird();
            setRadioValue("radio3");
        }, 5000);
        setTimeout(function() {
            handleScrollFourth();
            setRadioValue("radio4");
        }, 7500);
    }, [])

/*  
    const handleLeftArrow = () => {
        const items = document.querySelector('#items')
        items.scrollBy(-300, 0)
    }

    const handleRightArrow = () => {
        const items = document.querySelector('#items')
        items.scrollBy(300, 0)
    }
*/

    return ( 
        <CarouselContainer className="container">
            <CarouselWrapper>
                <CarouselList id="items" style={{marginLeft: -scrollX}} >
                    <CarouselItem className="first" ><CarouselImg src="https://unsplash.it/1600/400?image=970"/></CarouselItem>
                    <CarouselItem><CarouselImg src="https://unsplash.it/1600/400?image=976"/></CarouselItem>
                    <CarouselItem><CarouselImg src="https://unsplash.it/1600/400?image=993"/></CarouselItem>
                    <CarouselItem><CarouselImg src="https://unsplash.it/1600/400?image=969"/></CarouselItem>
                </CarouselList>
            </CarouselWrapper>
            <SelectorsWrap>
                {/* <CarouselLeft onClick={handleLeftArrow} /> <CarouselRight onClick={handleRightArrow} /> */}
                <ManualNavigation>
                    <ManualBtn onClick={() => {handleScrollFirst(); setRadioValue("radio1");}}  
                    style={{backgroundColor: radioValue=="radio1" ? "#40D3DC" : "transparent" }}  ></ManualBtn>
                    <ManualBtn onClick={() => {handleScrollSecond(); setRadioValue("radio2");}} 
                    style={{backgroundColor: radioValue=="radio2" ? "#40D3DC" : "transparent" }}  ></ManualBtn>
                    <ManualBtn onClick={() => {handleScrollThird(); setRadioValue("radio3");}} 
                    style={{backgroundColor: radioValue=="radio3" ? "#40D3DC" : "transparent" }}  ></ManualBtn>
                    <ManualBtn onClick={() => {handleScrollFourth(); setRadioValue("radio4");}} 
                    style={{backgroundColor: radioValue=="radio4" ? "#40D3DC" : "transparent" }}  ></ManualBtn>
                </ManualNavigation>
            </SelectorsWrap>
        </CarouselContainer>
     );
}
 
export default Carousel;