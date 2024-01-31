import Image from 'next/image'
import React from 'react'
import SkillBar from './SkillBar'
const Skills = () => {

    return (
        <div>
            <div className="mt-12">
                <h2 className="text-center text-5xl font-extrabold">Services</h2>
                <p className="text-center mx-2 font-mono">
                    "Learning is the compass that guides us; every acquired skill is a marker on the journey of continuous growth."</p>

                <div class="block md:flex justify-evenly items-center  w-full my-16">
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


            </div>




            {/* <div class="column right">
                <div class="bars">
                    <div class="info">
                        <span>HTML5</span>

                    </div>
                    <div class="line html"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>CSS3</span>
                        <span>80%</span>
                    </div>
                    <div class="line css"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>JavaScript</span>
                        <span>80%</span>
                    </div>
                    <div class="line js"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>ECMAScript</span>
                        <span>70%</span>
                    </div>
                    <div class="line ecmascript"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Firebase</span>
                        <span>80%</span>
                    </div>
                    <div class="line firebase"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>React.js</span>
                        <span>70%</span>
                    </div>
                    <div class="line react"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Next.js</span>
                        <span>70%</span>
                    </div>
                    <div class="line next"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Node.js</span>
                        <span>50%</span>
                    </div>
                    <div class="line node"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Express.js</span>
                        <span>50%</span>
                    </div>
                    <div class="line express"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Github</span>
                        <span>80%</span>
                    </div>
                    <div class="line github"></div>
                </div>

                <div class="bars">
                    <div class="info">
                        <span>BootStrap 5</span>
                        <span>90%</span>
                    </div>
                    <div class="line bootstrap"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Social Media Post Making</span>
                        <span>80%</span>
                    </div>
                    <div class="line smpm"></div>
                </div>

            </div> */}
        </div>
    )
}

export default Skills;