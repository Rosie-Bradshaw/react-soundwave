import './hero.style'; 
import { Button } from '../../components';
import { HeroBackgroundBlueCircle, HeroBackgroundPurpleCircle, HeroBigBackgroundBlueCircle, HeroContainer, HeroDivHalf, HeroImage, HeroText } from './hero.style';
import  girl from '../../assets/girl.png';

export default function Hero(){
    return (
        <HeroContainer>
            <HeroBackgroundPurpleCircle />
            <HeroBackgroundBlueCircle />
            <HeroBigBackgroundBlueCircle />
            
            <HeroDivHalf>
                <HeroImage src={girl} alt='image-girl' />
            </HeroDivHalf>
            
            <HeroText>
                <h1>Feel The Music</h1>
                <h2>Stream over 20 thousand songs with one click</h2>
                <Button></Button>
            </HeroText>
            
        </HeroContainer>
    )
}