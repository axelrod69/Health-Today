import '../App.css'
import FirstScreen from '../features/screens/FirstScreen'
import { LocalizationProvider } from '../core/localization/LocalizationProvider'

function App() {

  return (
    <>
      <LocalizationProvider>
        <FirstScreen />
      </LocalizationProvider>

    </>
  )
}

export default App
