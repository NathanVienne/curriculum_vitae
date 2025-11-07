import Icon from '@mdi/react';

export default function SoftSkills({label, icon}) {
    return (
        <div className="w-50 flex justify-evenly items-center text-white border border-neutral rounded-xl hover:shadow-md hover:shadow-secondary
        transition-all duration-500 hover:translate-y-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1">
            <div className="rounded-full p-2 hover:text-accent">
                <Icon path={icon} size={1} />
            </div>
            <div className="font-medium">
                {label}
            </div>
        </div>
    )
}