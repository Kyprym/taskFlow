import { useState, type JSX } from 'react'
import SearchIcon from '../../../assets/svg/search.svg?react'
import headerButtonStyle from './headerButtonStyle.module.scss'
import { SettingWindow } from '../setting/settingWindow'


export const HeaderButtons = () =>{
    const [settingWindowState, setSettingWindowState] = useState<boolean>(false)

    const enableSettingWindow = ():void => setSettingWindowState(true)
    const disableSettingWindow = ():void => setSettingWindowState(false)
    

    const showSettingWindow:JSX.Element = settingWindowState? <SettingWindow close={disableSettingWindow}/> : <></> 

    return (<>
            <SearchIcon 
                    className={headerButtonStyle.SearchButtonStyleDeactive}
                    onClick={enableSettingWindow}
                    />
            {showSettingWindow}
        
        </>)
}