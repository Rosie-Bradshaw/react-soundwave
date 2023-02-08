import { BoldText } from '../../Global.styles';
import Button, { FullWidthJoinButton } from '../button/Button';
import './form.style'; 
import { FormDiv} from './form.style';

export default function Form(){
    return (
        <form>
            <FormDiv>
                <label htmlFor="name"><BoldText>Name:</BoldText></label>
                <input type="text" id="name" name="name"/>
                <label htmlFor="email"><BoldText>Email:</BoldText></label>
                <input type="email" id="email" name="email"/>
                <label htmlFor="password"><BoldText>Password:</BoldText></label>
                <input type="text" id="password" name="password"/>
                <FullWidthJoinButton></FullWidthJoinButton>
            </FormDiv>
        </form>
    )
}