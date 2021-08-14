import { FC } from "react"

interface component_props{
    say:string,
    time?:string
}

const Header:FC<component_props> = ({say, time}) => {
    return (
        <div>
            <h1>header</h1>
            <h2 style={{color:'red'}}>{say}</h2>
            <h3>{time}</h3>
        </div>
    )
}

Header.defaultProps={
    time:'15:44'
}

export default Header
