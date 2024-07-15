import React, { useContext } from 'react'
import { FeatureFlagsContext } from './context'
import LigthDark from '../LightDark/index'
import TicTacToe from '../Tic-Tac-Toe/index'
import QR from '../QR/index'
import SearchAutoComplete from '../SearchAutoComplete/index'
import Accordian from '../Accordian/Accordian'

const index = () => {
    const {loading, enabledFlags} = useContext(FeatureFlagsContext)

    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <LigthDark />
        },
        {
            key: "showTicTacToe",
            component: <TicTacToe />
        },
        {
            key: "showQR",
            component: <QR />
        },
        {
            key: "showSearchAutoComplete",
            component: <SearchAutoComplete />
        },
        {
            key: "showAccordian",
            component: <Accordian />
        }
    ]

    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey]
    }

    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {
                componentsToRender.map((component) => {
                    return checkEnabledFlags(component.key) ? component.component : null
                })
            }
        </div>
    )
}

export default index
