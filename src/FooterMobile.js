export default function FooterMobile() {
    return (
        <div className="fundo-mobile">
            <Icons />
        </div>
    );
}

function Icons() {
    const iconNames = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
    return iconNames.map(icon => <ion-icon name={icon}></ion-icon>)
}