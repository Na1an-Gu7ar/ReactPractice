import './App.css'
import Accordian from './Components/Accordian/Accordian'
import ColorGenerator from './Components/RandomColor/index'
import StartRating from './Components/StartRating/index'
import ImageSlider from './Components/Image-slider/index'
import LoadMore from './Components/Load_more/index'
import NavigationMenu from './Components/NavigationMenu/index'
import data from './Components/NavigationMenu/data'
import QR from './Components/QR/index'
import LigthDark from './Components/LightDark/index'
import ScrollIndicator from './Components/Scroll-Indicator/index'
import Tabs from './Components/Tabs/index'
import ModalPopup from './Components/ModalPopup/index'
import ProfileFinder from './Components/Profile-finder/index'
import SearchAutoComplete from './Components/SearchAutoComplete/index'
import TicTacToe from './Components/Tic-Tac-Toe/index'
import FeatureFlag from './Components/feature-flag/index'
import FeatureFlagsProvider from './Components/feature-flag/context/index'
import UseFetch from './Components/Use_fetch/test'

function App() {

  return (
    <>
      {/* <Accordian /> */}
      {/* <ColorGenerator /> */}
      {/* <StartRating /> */}
      {/* <ImageSlider /> */}
      {/* <LoadMore /> */}
      {/* <NavigationMenu menu={data}/> */}
      {/* <QR /> */}
      {/* <LigthDark /> */}
      {/* <ScrollIndicator /> */}
      {/* <Tabs /> */}
      {/* <ModalPopup /> */}
      {/* <ProfileFinder /> */}
      {/* <SearchAutoComplete /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagsProvider>
        <FeatureFlag />
      </FeatureFlagsProvider> */}
      <UseFetch />
    </>
  )
}

export default App
