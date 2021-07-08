import { useContext } from "react";
import { Container } from "./home"
import { ThemeContext } from 'styled-components'
import { shade } from "polished";
import Switch from 'react-switch'
import avatar from '../../assets/images/avatar.jpg'


export function Home({ toggleTheme }){
    const { title } = useContext(ThemeContext)
    

    return(
        <Container> 
            <header>
            <h1>Yellow</h1>
            <span>Tecnology</span>
            <div>
                
                <Switch 
                    onChange={toggleTheme}
                    checked={title === "light"}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor={shade(0.15, "#AF4DFF")}
                    onColor="#EDBF31"
                    className="switch"
                />
                <nav>
                    <ul>
                        <button>
                            <li>Home</li>
                            <li>Porfolio</li>
                            <li>Orçamentos</li>
                        </button>
                    </ul>
                </nav>
            </div>
            </header>

            <main>
                <div className="body">
                    <h2>Welcome to Yellow</h2>
                    <small>Seu website ou aplicativo com mais velocidade</small>
                    <img src={avatar} alt="avatar" />

                    <button type="button">Saiba mais</button>
                </div>
            </main>
        </Container>
    )
}