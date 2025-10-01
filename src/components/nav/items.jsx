export default  function Links({label}) {
    return (
        <li className="px-3 py-2 text-xs font-medium uppercase hover:outline-1 hover:outline-neutral hover:rounded-xl hover:text-accent">
            <a>
                {label}
            </a>
        </li>
    )
}