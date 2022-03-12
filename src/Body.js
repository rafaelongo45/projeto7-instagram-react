export default function Body() {
    return (
        <div class="corpo">
            <Main />
            <Sidebar />
        </div>
    );
}

function Main() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    );
}

function Stories() {
    return (
        <div class="stories">
            <Story />
            <Icon name="chevron-forward-circle" class="setinha" />
        </div>
    );
}

function Story() {
    const userProfile = [
        { name: "9gag", img: "assets/img/9gag.svg" },
        { name: "meowed", img: "assets/img/meowed.svg" },
        { name: "barked", img: "assets/img/barked.svg" },
        { name: "nathanwpylestrangeplanet", img: "assets/img/nathanwpylestrangeplanet.svg" },
        { name: "wawawicomics", img: "assets/img/wawawicomics.svg" },
        { name: "respondeai", img: "assets/img/respondeai.svg" },
        { name: "filomoderna", img: "assets/img/filomoderna.svg" },
        { name: "memeriagourmet", img: "assets/img/memeriagourmet.svg" }
    ];

    const renderUsers = userProfile.map((user) => {
        const { img, name } = user;
        return (
            <div class="story">
                <div class="imagem">
                    <img src={img} />
                </div>
                <div class="usuario">
                    {name}
                </div>
            </div>
        )
    });

    return renderUsers;
}

function Posts() {
    const userPost = [
        {
            userImg: "assets/img/meowed.svg", userName: "meowed", userPostImg: "assets/img/gato-telefone.svg", commentUserImg: "assets/img/respondeai.svg",
            commentText: <div>Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></div>
        },
        {
            userImg: "assets/img/barked.svg", userName: "barked", userPostImg: "assets/img/dog.svg", commentUserImg: "assets/img/adorable_animals.svg",
            commentText: <div> Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong> </div>
        }
    ]
    return (userPost.map((user) => {
        const { userImg, userName, userPostImg, commentUserImg, commentText } = user;
        return (
            <div class="post">
                <Top img={userImg} userName={userName} />
                <Content img={userPostImg} />
                <Bottom img={commentUserImg} text={commentText} />
            </div>
        )
    }))
}

function Top({ img, userName }) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={img} />
                {userName}
            </div>
            <Icon name="ellipsis-horizontal" class="acoes" />
        </div>
    )
}

function Content({ img }) {
    return (
        <div class="conteudo">
            <img src={img} />
        </div>
    )
}

function Bottom({ img, text }) {
    return (
        <div class="fundo">
            <Actions />
            <Likes img={img} text={text} />
        </div>
    )
}

function Actions() {
    return (
        <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <Icon name="bookmark-outline" />
        </div>
    )
}

function Likes({ img, text }) {
    return (
        <div class="curtidas">
            <img src={img} />
            <div class="texto">
                {text}
            </div>
        </div>
    )
}

function Sidebar() {
    return (
        <div class="sidebar">
            <User src="assets/img/catanacomics.svg" userName="catanacomics" name="Catana" />
            <Sugestions />
            <Links />
            <Copyright text = "© 2021 INSTAGRAM DO FACEBOOK"/>
        </div>
    );
}

function User(props) {
    return (
        <div class="usuario">
            <img src={props.src} />
            <div class="texto">
                <strong>{props.userName}</strong>
                {props.name}
            </div>
        </div>
    );
}

function Sugestions() {
    return (
        <div class="sugestoes">
            <SuggestionsTitle title="Sugestões para você" subTitle="Ver tudo" />
            <Suggestion />
        </div>
    );
}

function SuggestionsTitle(props) {
    return (
        <div class="titulo">
            {props.title}
            <div>{props.subTitle}</div>
        </div>
    )
}

function Suggestion() {
    const suggData = [
        {userImg: "assets/img/bad.vibes.memes.svg", userName:"bad.vibes.memes"}, 
        {userImg: "assets/img/chibirdart.svg", userName:"chibirdart"}, 
        {userImg: "assets/img/razoesparaacreditar.svg", userName:"razoesparaacreditar"}, 
        {userImg: "assets/img/adorable_animals.svg", userName:"adorable_animals"}, 
        {userImg: "assets/img/smallcutecats.svg", userName:"smallcutecats"}
    ]
    
    return ( suggData.map(user =>{
        const{userImg, userName} = user;
        return(
        <div class="sugestao">
            <div class="usuario">
                <img src={userImg} />
                <div class="texto">
                    <div class="nome">{userName}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
        )
    }))
}

function Links() {
    const arrayLinks = ["Sobre ", "• ", "Ajuda ", "• ", "Imprensa ", "• ", "API ", "• ", "Carreiras ", "• ", "Privacidade ", "• ", 
    "Termos ", "• ", "Localizações ", "• ", "Contas mais relevantes ", "• ", "Hashtags ", "• ", "Idioma"]
    return ( <div class="links"> {arrayLinks.map(link => link)} </div> );
}

function Copyright({text}) {
    return (
        <div class="copyright">
            {text}
        </div>
    );
}

function Icon(props) {
    return (
        <div className={props.class}>
            <ion-icon name={props.name}></ion-icon>
        </div>
    );
}