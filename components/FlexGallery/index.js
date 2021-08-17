import { FlexGalleryContainer, FlexGalleryItem, FlexGalleryWrapper } from "./FlexGalleryStyles"
import styles from '../../styles/FlexGallery.module.css'

const FlexGallery = () => {
    return ( 
        <FlexGalleryContainer>
            <FlexGalleryWrapper>
                <FlexGalleryItem className={styles.item1}></FlexGalleryItem>
                <FlexGalleryItem className={styles.item2}></FlexGalleryItem>
                <FlexGalleryItem className={styles.item3}></FlexGalleryItem>
                <FlexGalleryItem className={styles.item4}></FlexGalleryItem>
                <FlexGalleryItem className={styles.item5}></FlexGalleryItem>
                <FlexGalleryItem className={styles.item6}></FlexGalleryItem>
                <FlexGalleryItem className={styles.item7}></FlexGalleryItem>
                <FlexGalleryItem className={styles.item8}></FlexGalleryItem>
                <FlexGalleryItem className={styles.item9}></FlexGalleryItem>
                <FlexGalleryItem className={styles.item10}></FlexGalleryItem>
                <FlexGalleryItem className={styles.item11}></FlexGalleryItem>
                <FlexGalleryItem className={styles.item12}></FlexGalleryItem>
            </FlexGalleryWrapper>
        </FlexGalleryContainer>
     );
}
 
export default FlexGallery;