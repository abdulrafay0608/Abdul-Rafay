
import Image from 'next/image';
import PropTypes from 'prop-types';
const SkillBar = ({ skillName, bgcolor, subname, percentage, logoSrc }) => {
    return (
        <>
            <div className="mb-6 mx-2">
                <Image className={`rounded-full animate-bounce ${bgcolor}`} height={50} width={50} src={logoSrc} alt="skill logo" />
                <div className="flex justify-between items-center mx-2" style={{ width: `${percentage}%` }}>
                    <span className="text-xl font-mono mb-2">{skillName} <span className='font-light text-sm'> {subname} </span> </span>
                    <span className="text-base text-white bg-slate-600 rounded-full p-1 font-extrabold italic mb-2">{percentage}%</span>
                </div>
                <div className="items-center flex justify-start h-6 w-full bg-slate-900 shadow-slate-500 shadow-md border-4 border-double border-slate-300 rounded-full relative">
                    <div className="h-2 bg-yellow-400 text-right rounded-full mx-1" style={{ width: `${percentage}%` }}></div>
                </div>
            </div>

        </>
    );
};
SkillBar.propTypes = {
    skillName: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    logoSrc: PropTypes.string.isRequired,
};
export default SkillBar;
