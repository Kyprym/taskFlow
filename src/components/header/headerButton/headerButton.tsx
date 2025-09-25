import SearchIcon from '../../../assets/svg/search.svg?react'
import headerButtonStyle from './headerButtonStyle.module.scss'

interface HeaderButtonsProps {
  openModal: () => void
}

export const HeaderButtons = ({ openModal }: HeaderButtonsProps) =>{
    return (
        <SearchIcon 
            className={headerButtonStyle.SearchButtonStyleDeactive}
            onClick={openModal}
        />
    )
}