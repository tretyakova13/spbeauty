import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? 'px' : props.minWidth;
    const Button = styled.div`
        background: #FFFFFF;
        min-width: ${minWidth};
        color: #152842;
        &:hover {
            background: linear-gradient(180deg, #DFEAF1 0%, #CFDDE8 100%);
        }
        &:active {
            background: #DFDFDF;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;