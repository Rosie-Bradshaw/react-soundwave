import './button.style'; 
import { StyledFullWidthJoinButton, StyledJoinButton } from './button.style';

export default function JoinButton(){
    return (
        <StyledJoinButton to={'/join'}>Join Now</StyledJoinButton>
    )
}

export function FullWidthJoinButton() {
    return (
        <StyledFullWidthJoinButton to={'/join'}>Join Now</StyledFullWidthJoinButton>
    )
}