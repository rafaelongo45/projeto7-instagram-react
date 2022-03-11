export default function Navbar() {
    return (
        <div>
            <div class="navbar">
                <Container />
            </div>
        </div>
    )
}

function Container() {
    return (
        <div class="container">
            <Logo />
            <MobileLogoIcon />
            <MobileLogoImage />
            <SearchBar />
            <Icons />
            <MobileIcons />
        </div>
    )
}

function Logo() {
    return (
        <div class="logo">
            <Icon name="logo-instagram" />
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
        </div>
    );
}

function MobileLogoIcon() {
    return (
        <div class="logo-mobile">
            <Icon name="logo-instagram" />
        </div>
    );
}

function MobileLogoImage() {
    return (
        <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
        </div>
    );
}

function SearchBar() {
    return (
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    );
}

function Icons() {
    return (
        <div class="icones">
            <Icon name="paper-plane-outline" />
            <Icon name="compass-outline" />
            <Icon name="heart-outline" />
            <Icon name="person-outline" />
        </div>
    );
}

function MobileIcons() {
    return (
        <div class="icones-mobile">
            <Icon name="paper-plane-outline" />
        </div>
    );
}


function Icon(props) {
    return (
        <ion-icon name={props.name}></ion-icon>
    )
}