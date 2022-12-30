import React from 'react'
import { IntroContainer,IntroContent,IntroT,IntroV,Des } from './IntroAspects'

const Intro = () => {
  return (
    <>
      <IntroContainer>
        <IntroContent>
          <IntroT>
                GDSC <IntroV> VelTech </IntroV>
            </IntroT>
            <Des>
                  Google Developer Student Clubs also termed as GDSC's are a group of local community groups for college and universities that bring together talented people that can mutually benefit from each others. This endeavor is supported by Google via various activities and sessions.
            </Des>  
        </IntroContent>  
      </IntroContainer>
    </>
  )
}

export default Intro