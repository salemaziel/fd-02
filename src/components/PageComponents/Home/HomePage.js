import React from 'react'

import S1Hero from "./s1Hero"
import S2BizDetailsCard from "./s2BizDetailsCard"
import S3MenuButton from "./s3MenuButton"
import S2Features from "./s2Features"
import S3SplitSections from './s3SplitSections'

import S4FeaturedSpecials from "./s4FeaturedSpecials"
import S4Stats from './s4Stats'
import S5Testimonials from './s5Testimonials'
import S6CTA from './s6CTA'

//import S1Hero2 from "./s1Hero2"
import BG from "../../../images/pexels-anthony-leong-2092897-1920x.jpg"


const HomePage = (props) => {
    return(
        <>
        <S1Hero
        bgImage={BG}
        Title="Restaurant Name"
        Description="Serving Escondido For 15 years"
        ButtonText="Get Started"
        BelowButtonText="Sed fermentum felis ut cursu"
        />

        <S2BizDetailsCard />
       
       <S3MenuButton />

        <S4FeaturedSpecials />


        </>
    )
} 

export default HomePage