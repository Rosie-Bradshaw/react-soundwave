import { FlexDivRow, MainContainer } from '../../Global.styles';
import Footer from '../../components/footer/Footer';
import './discover.style'; 
import { DiscoverImage, IconDiv, IconImage, } from './discover.style';

export default function Discover(){
    return (
        <>
            <MainContainer>
                <div>
                    <h1>Discover new music</h1>
                    <FlexDivRow>
                        <IconDiv>
                            <IconImage src="./assets/microphone.svg" alt="charts" />
                            <p>Charts</p>
                        </IconDiv>
                        <IconDiv>
                            <IconImage src="./assets/albums.svg" alt="albums" />
                            <p>Albums</p>
                        </IconDiv>
                        <IconDiv>
                            <IconImage src="./assets/more.svg" alt="more" />
                            <p>More</p>
                        </IconDiv>
                    </FlexDivRow>
                    <p>By joining you can benefit by listening to the latest albums released.</p>
                </div>
                
                <DiscoverImage src="./assets/covers.jpg" alt="cover-image" />
                
            </MainContainer>
            
            <Footer />
        </>
    )
}