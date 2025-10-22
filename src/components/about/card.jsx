import Icon from '@mdi/react';

export default function Card({ label, iconPath, description}) {
  return (
    <div class="parent">
      <div class="card">
        <div class="icone">
          <span class="circle circle5">
            <Icon  path={iconPath} size={1}/>
          </span>
        </div>
        <div class="glass"></div>
        <div class="content">
          <span class="title">{label}</span>
          <span class="text"
          >{description}</span>
        </div>
      </div>
    </div>

  );
}
