import React from 'react'
import { SidebarContainer,Icon,CloseI,SidebarWrap,SidebarM,SidebarH } from './SidedropAspects'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseI />
        </Icon>
        <SidebarWrap>
            <SidebarM>
                <SidebarH to='/team' onClick={toggle}>
                    Team
                </SidebarH>
                <SidebarH to='/works' onClick={toggle}>
                    Works
                </SidebarH>
                <SidebarH to='/events' onClick={toggle}>
                    Events
                </SidebarH>
            </SidebarM>
        </SidebarWrap>
    </SidebarContainer>
  )
}

export default Sidebar