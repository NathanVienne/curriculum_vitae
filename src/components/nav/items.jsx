export default  function Links({label}) {
    return (
        <li className="px-5 py-3 text-xs font-medium uppercase hover:outline-1 hover:outline-neutral hover:rounded-md hover:text-accent">
            <a>
                {label}
            </a>
        </li>
    )
}