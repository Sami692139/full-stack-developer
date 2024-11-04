import React from 'react'
import SeactionOne from './SeactionOne/SeactionOne'
import SeactionTwo from './SectionTwo/SeactionTwo'
import SeactionThree from './SeactionThree/SeactionThree'
import SeactionFour from './SectionFour/SeactionFour'
import SeactionFive from './SectionFive/SeactionFive'
import SeactionSix from './SeactionSix/SeactionSix'
import Youtube from './Youtube/Youtube'

function Main() {
  return (
    <div>
        <SeactionOne/>
        <SeactionTwo/>
        <SeactionThree/>
        <SeactionFour/>
        <SeactionFive/>
        <SeactionSix/>
        {/* <Youtube/> */}
    </div>
  )
}

export default Main