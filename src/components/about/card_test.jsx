import Icon from "@mdi/react"


export default function Test({ title, period, description, icon }) {
    return (
        <div className="carte">
            <div className="icone">
                <Icon path={icon} size={2} />
            </div>
            <div className=" card__content p-8 flex flex-col justify-center">
                <h4 className="font-semibold text-accent card__title">{title}</h4>
                <p className="pt-1 text-secondary">{period}</p>
                <p className="text-justify text-slate-300 pt-3 card__description">{description}</p>
            </div>
        </div>
    )
}