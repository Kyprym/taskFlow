import headerStyle from './header.module.scss'
import Logo from '../../assets/svg/logo.svg?react'
import { HeaderButtons } from './headerButton/headerButton'
export const Header = () => {
  return (
    <header className={headerStyle.headerStyle}>
      <div>
        <Logo className={headerStyle.logo}/>
        <span className={headerStyle.logoText}>TaskFlow</span>
      </div>
      <HeaderButtons/>
    </header>
  )
}