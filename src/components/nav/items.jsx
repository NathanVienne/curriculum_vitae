export default  function Links({label, href}) {
    return (
        <li id="navigation_item" className="super-li px-5 py-3 text-xs font-medium uppercase border border-primary transition-all duration-[475ms] hover:rounded-md hover:shadow-lg hover:shadow-[#2416c4]">
            <a href={href}>
                {label}
            </a>
        </li>
    )
}