
import styled from 'styled-components'


const Container = styled.div`
    display: inline-block;
`

const Checkbox = styled.input.attrs({
    type: 'checkbox'
})`
    display: none;

    & + label {
        display: block;
        position: relative;

        width: 45px;
        height: 25px;
        padding: 1px;

        background: #ddd;
        border-radius: 13px;
        cursor: pointer;
        
        transition: background 200ms;
    }

    &:checked + label {
        background: #6495ed;
    }



    & + label::before {
        content: '';
        display: block;

        position: absolute;
        left: 0;
        top: 2px;
        
        height: 21px;
        width: 21px;
        margin-left: 2px;
        
        border-radius: 100%;
        background: white;
        transition: all 200ms;
        box-shadow: -1px 1px 1px rgba( 0, 0, 0, .2 );
    }

    &:checked + label::before {
        content: '';
        left: 100%;
        transform: translateX(-100%);
        margin-left: -2px;
        box-shadow: 1px 1px 1px rgba( 0, 0, 0, .2 );
    }
`

export default function SwitchButton({ id }) {
    return(
        <Container>
            <Checkbox id={id} />
            <label htmlFor={id}></label>
        </Container>
    )
}