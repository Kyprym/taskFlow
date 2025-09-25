import RotateClockwiese from '../../assets/svg/rotate-clockwise.svg?react'
import fallbackStyle from './fallback.module.scss'

export const Fallback = () =>{


    



    return <div className={fallbackStyle.parent}>
            <RotateClockwiese className={fallbackStyle.spinner}/>
    </div>
}