import Image from 'next/image'
import React from 'react'
import SkillBar from './SkillBar'
// Learning is the compass that guides us; every acquired skill is a marker on the journey of continuous growth.
const Skills = () => {

    return (
        <section className='bg-slate-900 py-4' id='skills'>

            <div className='pt-12'>
                <h2 className="text-center text-5xl font-extrabold">Skills</h2>
                <p className="text-center mx-2 font-mono">
                    &quot;Mastering the Tools of the Trade&quot;</p>
            </div>

            <div className="block md:flex justify-evenly items-center  w-full my-16">
                <div className='md:w-5/12'>
                    <SkillBar skillName="HTML5" percentage={80} logoSrc="/skills/html.svg" />
                    <SkillBar skillName="CSS3" percentage={80} logoSrc="/skills/css.svg" />
                    <SkillBar skillName="JavaScript & ECMA Script" percentage={70} logoSrc="/skills/js.svg" />
                    <SkillBar skillName="Github" percentage={80} logoSrc="/skills/github.webp" />
                    <SkillBar skillName="Tailwind CSS & BootStrap 5" percentage={75} logoSrc="/skills/tailwind.svg" />
                </div>
                <div className='md:w-5/12'>
                    <SkillBar skillName="Firebase" percentage={75} logoSrc="/skills/firebase.webp" />
                    <SkillBar skillName="React" percentage={75} logoSrc="/skills/reactjs.svg" />
                    <SkillBar skillName="Next js" bgcolor={"bg-white p-2"} subname={"(React Framework)"} percentage={75} logoSrc="/skills/next.svg" />
                    <SkillBar skillName="Node js & Express js" percentage={55} logoSrc="/skills/nodeJs.png" />
                    <SkillBar skillName="React Native" percentage={55} logoSrc="/skills/reactjs.svg" />
                </div>

            </div>

        </section >
    )
}

export default Skills;