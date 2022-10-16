import React from "react"
import './paginas css/home.css'
import imgA from "./paginas css/0001-0110-_1_.gif"
import imgB from "./paginas css/baner.jpeg"
import enzo from "./paginas css/photos/enzo.jpeg"
import julio from "./paginas css/photos/julio.jpeg"
import lucas from "./paginas css/photos/lucas.jpeg"
import joao from "./paginas css/photos/joao.jpeg"
import luiz from "./paginas css/photos/luiz.jpg"
import menuclose from "../botão/menuClose"

function Home() {
    return (
        <div>
            <div className="sideMenu" id="sideMenu" onMouseLeave={menuclose}>
                    <ul>
                        <li>
                        <a href="#yeye">Sobre</a>
                        </li>
                        <li>
                        <a href="#info">Equipe</a>
                        </li>
                        <li>
                        <a href="https://charts.mongodb.com/charts-project-0-nhjgr/embed/dashboards?id=633d8bb3-4c53-4d83-89dd-0e88e56448d6&theme=dark&autoRefresh=true&maxDataAge=1800&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed" target="blank">Análise</a>
                        </li>
                    </ul>
                </div>
            <div id="main">
                <section className="help">
                        <div className="text" id="first">
                            <h1 id="slogan">O espelho que cuida de você</h1>
                        </div>
                    <div className="text" id="second">
                        <h3>
                            Nosso  projeto  consiste  em  um  espelho  visado  a  auxiliar  e  monitorar  pessoas  com
                            distúrbios  e  problemas  comportamentais, criando  gráficos  e  coletando  dados  para
                            que o usuário possa monitorar seu estado mental.
                        </h3>
                    </div>
                </section>
                <section className="yeye" id="yeye">
                    <img src={imgA} alt="gif" className="image"/>
                    <div className="giftext">
                        <h1>Umirror é um espelho inteligente visado no monitoramento e alivio do humor de seu usuario</h1>
                        <h4>Nosso projeto consiste em um espelho visado a auxiliar e monitorar pessoas com 
                        distúrbios e problemas comportamentais. Criando gráficos e coletando dados para 
                        que o usuário possa monitorar seu estado mental.</h4>
                    </div>
                </section>
                <section className="yeye2">
                <img src={imgB} alt="nobro" className="image2"/>
                    <div className="place">
                        <h4>
                        É usado um  algoritmo  que 
                        processara dados de nosso software de reconhecimento facial para poder dar sugestões, 
                        tais quais aparecerão em telas de LCD plantadas atrás  do  espelho  e  seu  painel 
                        refletivo, que  o  usuário  poderá  ver  enquanto  se  arruma  para  seu  dia. 
                        </h4>
                    </div>
                </section>
                <section className="info" id="info">
                    <h1>Nossa Equipe:</h1>
                    <div className="cont">
                        <div className="wrapper">
                                <h3>Luiz</h3>
                                <h4>Diretor de Mídias Sociais, Programador Front-end</h4>
                                <img src={luiz} alt="luiz"/>
                                <h3>Enzo</h3>
                                <h4>Diretor de projeto, Programador Back-end</h4>
                                <img src={enzo} alt="enzo"/>
                                <h3>Julio</h3>
                                <h4>Programador Front-End</h4>
                                <img src={julio} alt="julio"/>
                                <h3>Lucas</h3>
                                <h4>Construtor de Projeto e Diretor de Vídeo</h4>
                                <img src={lucas} alt="lucas"/>
                                <h3>João</h3>
                                <h4>Animador de Vídeo e Criação de Design</h4>
                                <img src={joao} alt="joao"/>
                            </div>
                        </div>
                </section>
            </div>
        </div>
    )
}

export default Home