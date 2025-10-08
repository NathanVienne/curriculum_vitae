import Icon from '@mdi/react';

export default function Card({ label, iconPath }) {
  return (
    <div className="transparent-card rounded-xl h-64 w-64 bg-primary flex flex-col justify-between overflow-hidden">
      <div className="flex-grow flex items-center justify-center">
        <figure>
          <Icon
            path={iconPath}
            size={2.5}
            className="p-4 bg-neutral rounded-full text-white"
          />
        </figure>
      </div>

      <div className="text-white text-center py-3">
        <h4 className="text-lg font-semibold">{label}</h4>
      </div>
    </div>
  );
}
