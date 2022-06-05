import React from 'react'
import styled from "styled-components"
import Section1 from "./Section1"
import Section from "./Section"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Sec from "./Sec"

function home() {
  return (
    <Container>

         <Section
            title="Model S"
            description="Order Online for Touchless Delievery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
          
          
          <Section1
                      title="Model Y"
                      description="Order Online for Touchless Delievery"
                      backgroundImg="model-y.jpg"
                      leftBtnText="Custom Order"
                      rightBtnText="Existing Inventory"
            />

<Section2
                      title="Model 3"
                      description="Order Online for Touchless Delievery"
                      backgroundImg="model-3.jpg"
                      leftBtnText="Custom Order"
                      rightBtnText="Existing Inventory"
            />
             <Section3
                        title="Model X"
                        description="Order Online for Touchless Delievery"
                        backgroundImg="model-x.jpg"
                        leftBtnText="Custom Order"
                        rightBtnText="Existing Inventory"
              />
       <Sec
                      title="Lowest Costing solar panel in World"
                      description="Money Back Guranteed"
                      backgroundImg="solar-panel.jpg"
                      leftBtnText="Order Now"
                      rightBtnText="Learn More"
            />
                <Sec
                      title="Solar Roof "
                      description="Produce Clean Energy From Your Roof "
                      backgroundImg="solar-roof.jpg"
                      leftBtnText="Shop Now"
                      rightBtnText="Learn More"
            />
                <Sec
                      title="Accessories"
                      description=""
                      backgroundImg="accessories.jpg"
                      leftBtnText="Shop Now"
                      />
                     
      
    </Container>
  )
}

export default home
const Container =styled.div`
  height: 100vh;
  `