import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <h2>For Better Experience Download QuickBite App</h2>  
      <div className='app-download-platform'>
        <img src={assets.play_store} alt="google play download" />
        <img src={assets.app_store} alt="app store download" />
      </div>    
    </div>
  )
}

export default AppDownload
