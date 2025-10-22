export default function Media({id, img, pseudo, name, followers, href, xmlns, path, application}) {
    return (
        <div id={id}class="tooltip-container">
            <div class="tooltip">
                <div class="profile">
                    <div class="user">
                        <div class="img">{img}</div>
                        <div class="details">
                            <div class="pseudo">{pseudo}</div>
                            <div class="username">{name}</div>
                        </div>
                    </div>
                    <div class="about">{followers}</div>
                </div>
            </div>
            <div class="text">
                <a class="icon-social" href={href}>
                    <div class="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fab fa-linkedin">
                            <svg viewBox="0 0 448 512" height="1em" fill="currentColor" xmlns={xmlns}>
                                <path
                                    d={path}
                                ></path>
                            </svg>
                        </span>
                    </div>
                    <div class="text">{application}</div>
                </a>
            </div>
        </div>
    )
}