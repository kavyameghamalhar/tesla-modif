import React from 'react'
import styled from "styled-components"
function Section1({title,description,leftBtnText,rightBtnText,backgroundImg}) {



  return (
    <Wrap bgImage={backgroundImg}>

    <ItemText>
      <h1>
        {title}
      </h1>
      <p>{description}</p>
    </ItemText>
    <Buttons> <ButtonGroup>
        <LeftButton>
            {leftBtnText}
        </LeftButton>
        {rightBtnText &&
                <RightButton>
                {rightBtnText}
            </RightButton>
        
        }


    </ButtonGroup>
    <DownArrow src="/images/down-arrow.svg"></DownArrow>
    </Buttons>
   
    </Wrap>
  )
}

export default Section1

const Wrap=styled.div`

width:40vw;
height:50vh;
background-size:cover;
background-position:60% 30%;
background-repeat: repeat;
display:flex;
alignSelf:flex-end;

margin-left:auto;
margin-top:-512px;
flex:1;


flex-direction:row;
justify-content:space-between;   //vertical 
align-items:flex-end; //horizontal
background-image: ${props => `url("/images/${props.bgImage}")`
}};

`


const ItemText=styled.div`
padding-top:15vh;
text-align:center;

`

const ButtonGroup=styled.div `
  display:flex;
  margin-bottom:30px;
  @media (max-width:100px) {
    flex-direction: column;
}

`


const LeftButton=styled.div`
  background-color:rgb(23,26,32,0.8);
  height:40px;
  width:80px;
  color:white;
  display:flex;
  justify-content:center;
  align-items:25% left;
  border-radius:100px;
  opacity:0.85;
  text-transform:uppercase;
  font-size:12px;
  cursor:pointer;
  margin:25px;
`

const RightButton=styled(LeftButton)`

  background:white;
  opacity:0.65;
  color:black;
`

const DownArrow=styled.img`

  height:40px;
  overflow-x:hidden;
  animation:animateDown infinite 1.5s;
`
const Buttons=styled.div ``


