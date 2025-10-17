export default  function Links({label, href}) {
    return (
        <li className="super-li px-5 py-3 text-xs font-medium uppercase border border-primary hover:bg-neutral/50 transition-all duration-[475ms] hover:rounded-md hover:text-secondary hover:border-[#ffffff]/20">
            <a href={href}>
                {label}
            </a>
        </li>
    )
}