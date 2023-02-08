import { FlexDivRow, MainContainer } from '../../Global.styles';
import Footer from '../../components/footer/Footer';
import './discover.style'; 
import { DiscoverImage, IconDiv, IconImage, } from './discover.style';
import microphone from '../../assets/microphone.svg';
import albums from '../../assets/albums.svg';
import more from '../../assets/more.svg';
import covers from '../../assets/covers.jpg';

export default function Discover(){
    return (
        <>
            <MainContainer>
                <div>
                    <h1>Discover new music</h1>
                    <FlexDivRow>
                        <IconDiv>
                            <IconImage src={microphone} alt="charts" />
                            <p>Charts</p>
                        </IconDiv>
                        <IconDiv>
                            <IconImage src={albums} alt="albums" />
                            <p>Albums</p>
                        </IconDiv>
                        <IconDiv>
                            <IconImage src={more} alt="more" />
                            <p>More</p>
                        </IconDiv>
                    </FlexDivRow>
                    <p>By joining you can benefit by listening to the latest albums released.</p>
                </div>
                
                <DiscoverImage src={covers} alt="cover-image" />
                
            </MainContainer>
            
            <Footer />
        </>
    )
}