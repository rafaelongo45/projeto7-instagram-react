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
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
        </div>
    );
}

function MobileLogoIcon() {
    return (
        <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
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
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    );
}

function MobileIcons() {
    return (
        <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    );
}