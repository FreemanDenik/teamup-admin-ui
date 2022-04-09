import React, { FC } from 'react'

import LayoutContainer from '../LayoutContainer'

import ButtonPanel from './ButtonPanel'
import Nav from './Nav'
import YourCity from './YourCity'
import headerStyle from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={headerStyle.header}>
      <LayoutContainer>
        <div className={headerStyle.inner}>
          <YourCity />
          <div className={headerStyle.logo}>TeamUp Group</div>
          <Nav />
          <ButtonPanel />
        </div>
      </LayoutContainer>
    </header>
  )
}

export default Header
