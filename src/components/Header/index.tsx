import "./styles.css";
import arrowIMG from "../../assets/arrow-drop.png";
import arrowBlackIMG from "../../assets/arrow-drop-black.png"
import searchBtn from "../../assets/search-icon.png"


function Header(){
    return(
        <header className="header">
            <div className="title">
                <h1>BLACKSTORM</h1>
            </div>
            <div className="menu-bar">
                <a href="/">História
                    <div className="dropdown">
                        <button className="dropbtn">
                            <img src={arrowIMG} alt="arrowDrop"></img>
                        </button>
                        <div className="dropdown-content">
                            <a href="/">Sobre</a>
                            <a href="/">Campeonatos Disputados</a>
                            <a href="/">Mural de Títulos</a>  
                        </div>      
                    </div>
                </a>
                <a href="/">Times
                    <div className="dropdown">
                        <button className="dropbtn">
                            <img src={arrowIMG} alt="arrowDrop"></img>
                        </button>
                        <div className="dropdown-content">
                            <a href="/">League of Legends       
                                <div className="nested-dropdown">
                                    <button className="nested-dropbtn"> 
                                        <img src={arrowBlackIMG} alt="nested-arrowDrop"></img> 
                                    </button>
                                    <div className="nested-dropdown-content">
                                        <a href="/">Classic</a>
                                        <a href="/">Legacy</a>
                                    </div>
                                </div>                      
                            </a>
                            <a href="/">Valorant
                            <div className="nested-dropdown">
                                    <button className="nested-dropbtn"> 
                                        <img src={arrowBlackIMG} alt="nested-arrowDrop"></img> 
                                    </button>
                                    <div className="nested-dropdown-content">
                                        <a href="/">Nightfall</a>
                                        <a href="/">Pinkstorm</a>
                                    </div>
                                </div>        
                            </a>
                        </div>     
                    </div>
                </a>
                <a href="/">Notícias</a>
                <a href="/">Comunidade</a>
                <div className="search-btn">
                    <a href="/">
                        <img src={searchBtn} alt="search-Button"></img>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;