export default function FooterMobile() {
    return (
        <div className="fundo-mobile">
            <Icon />
        </div>
    );
}

function Icon(){
    const iconNames = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
    const iconRender = iconNames.map((icon) => {
        return <ion-icon name = {icon}></ion-icon>
    })
    return iconRender;
}