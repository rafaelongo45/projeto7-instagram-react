export default function Navbar() {
    return (
        <div>
            <div className="navbar">
                <Container />
            </div>
        </div>
    )
}

function Container() {
    return (
        <div className="container">
            <Logo src = "assets/img/logo.png"/>
            <MobileLogoIcon />
            <MobileLogoImage src ="assets/img/logo.png"/>
            <SearchBar />
            <Icons />
            <MobileIcons />
        </div>
    )
}

function Logo(props) {
    return (
        <div className="logo">
            <Icon name="logo-instagram" />
            <div className="separador"></div>
            <img src= {props.src}/>
        </div>
    );
}

function MobileLogoIcon() {
    return (
        <div className="logo-mobile">
            <Icon name="logo-instagram" />
        </div>
    );
}

function MobileLogoImage(props) {
    return (
        <div className="instagram-mobile">
            <img src={props.src} />
        </div>
    );
}

function SearchBar() {
    return (
        <div className="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    );
}

function Icons() {
    return (
        <div className="icones">
            <Icon name="paper-plane-outline" />
            <Icon name="compass-outline" />
            <Icon name="heart-outline" />
            <Icon name="person-outline" />
        </div>
    );
}

function MobileIcons() {
    return (
        <div className="icones-mobile">
            <Icon name="paper-plane-outline" />
        </div>
    );
}


function Icon({name}) {
    return <ion-icon name={name}> </ion-icon>
}