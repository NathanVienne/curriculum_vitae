import { mdiChartLine, mdiAccountGroup, mdiRocketLaunch, mdiHumanGreetingProximity, mdiCommentAccount } from '@mdi/js';
import SoftSkills from './softSkills';
import DegreesList from './degreeList';

export default function Skills() {
    const skills = [
        { label: "Dynamique", iconPath: mdiRocketLaunch },
        { label: "Communication", iconPath: mdiCommentAccount },
        { label: "Collaboration", iconPath: mdiAccountGroup },
        { label: "Adaptation", iconPath: mdiChartLine },
        { label: "Sens du Service", iconPath: mdiHumanGreetingProximity }
    ];

    return (
        <section id="skills" className="bg-primary">
            <h2 className="text-center text-white pt-10 pb-5 text-4xl font-bold">Compétences</h2>
            <div className='flex flex-col items-center space-y-4 md:flex-row md:justify-around py-8'>
                {skills.map((skill, index) => (
                    <SoftSkills key={index} label={skill.label} icon={skill.iconPath} />
                ))}
            </div>
            <div>
                <DegreesList />
            </div>
        </section>
    )
}