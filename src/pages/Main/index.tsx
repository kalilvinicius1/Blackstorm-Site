import React from 'react'; 
import './styles.css';
import logoBKS from '../../assets/logoBKS.png';
import searchBtn from '../../assets/search-icon.png';
import menuBtn from '../../assets/menuBtn.png';
import wppLogo from '../../assets/wppLogo.png';
import instaLogo from '../../assets/instaLogo.png';
import ttLogo from '../../assets/ttLogo.png';
import ytbLogo from '../../assets/ytbLogo.png';

function Main(){
    return(
        <div className='container'>
            <div className='body'>
                <img src={logoBKS} alt='logoBKS'></img>
                <h1>Blackstorm E-Sports</h1>
                <div className='btns'>
                    <div className='base-btns'>
                        <button>
                            <img src={searchBtn} alt='search-btn'></img>
                        </button>
                        <button className='menu-btn'>
                            <img src={menuBtn} alt='menu-btn'></img>
                        </button>
                    </div>
                    <div className='social-btns'>
                        <a href='https://www.instagram.com/blackstormesports_/'>
                            <img src={instaLogo} alt='Instagram'></img>
                        </a>
                        <a href=''>
                            <img src={ytbLogo} alt='Youtube'></img>
                        </a>
                        <a href=''>
                            <img src={wppLogo} alt='Whatsapp'></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;