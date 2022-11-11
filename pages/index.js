import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu />
                <Header />
                <TimeLine Playlist={config.playlists}>
                    Conteúdo
                </TimeLine>
            </div>
        </>
    );
}
export default HomePage

/*function Menu(){
    return(
        <div>
            Menu
        </div>
    );
}*/

const StyledHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header(){
    return(
        <StyledHeader>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}></img>
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    );
}

function TimeLine(props){

    const playlistName = Object.keys(props.Playlist)
    return(
        <StyledTimeline>
            {
                playlistName.map((playlistName) =>{
                    const videos = props.Playlist[playlistName]
                    return (
                        <section>
                            <h2>{playlistName}</h2>
                            <div>
                                {
                                    videos.map((videos) =>{
                                        return(
                                            <a href={videos.url}>
                                                <img src={videos.thumb}/>
                                                <span>
                                                    {videos.title}
                                                </span>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    )
                })
            }
        </StyledTimeline>
    );
}