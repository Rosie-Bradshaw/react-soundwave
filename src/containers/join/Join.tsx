import { Form } from '../../components';
import { AccentColorSpan, DisplayText, MainContainer } from '../../Global.styles';
import Footer from '../../components/footer/Footer';
import './join.style'; 
import { DisplayTextDiv, JoinBackgroundBlueCircle, JoinBackgroundPurpleCircle } from './join.style';

export default function Join(){
    return (
        <>
            <JoinBackgroundBlueCircle></JoinBackgroundBlueCircle>
            <JoinBackgroundPurpleCircle></JoinBackgroundPurpleCircle>
            <MainContainer>
                <DisplayTextDiv>
                    <DisplayText>Join the <AccentColorSpan>fun.</AccentColorSpan></DisplayText>
                </DisplayTextDiv>
                <Form />
            </MainContainer>
            <Footer/>
        </>
    )
}