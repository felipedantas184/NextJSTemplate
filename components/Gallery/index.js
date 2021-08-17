import { GalleryContainer, GalleryItem, GalleryWrapper } from "./GalleryStyles"
import styles from '../../styles/Gallery.module.css'

const Gallery = () => {
    return ( 
        <GalleryContainer>
            <GalleryWrapper>
                <GalleryItem className={styles.item1}></GalleryItem>
                <GalleryItem className={styles.item2}></GalleryItem>
                <GalleryItem className={styles.item3}></GalleryItem>
                <GalleryItem className={styles.item4}></GalleryItem>
                <GalleryItem className={styles.item5}></GalleryItem>
                <GalleryItem className={styles.item6}></GalleryItem>
                <GalleryItem className={styles.item7}></GalleryItem>
                <GalleryItem className={styles.item8}></GalleryItem>
            </GalleryWrapper>
        </GalleryContainer>
     );
}
 
export default Gallery;