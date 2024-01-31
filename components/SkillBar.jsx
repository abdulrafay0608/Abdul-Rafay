// // SkillBar.js
// import { useState, useEffect } from 'react';
// import styles from './styles.module.css';

// const SkillBar = ({ title, percentage, image }) => {
//   const [width, setWidth] = useState(0);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setWidth(percentage);
// //     }, delay);

// //     return () => clearTimeout(timer);
// //   }, [percentage, delay]);

//   return (
//     <>
//      <div class="mb-6 mx-2">
//                             <Image className='rounded-full animate-bounce' height={50} width={50} src={image} alt='firebase-logo' />
//                             <div className='flex justify-between  items-center mx-2' style={{ width: {percentage} }}>
//                                 <span class="text-xl font-mono mb-2">{title}</span>
//                                 <span className='text-base text-white bg-slate-600 rounded-full p-1 font-extrabold italic mb-2' >percentage</span>
//                             </div>
//                             <div class="items-center flex justify-start h-6 w-full bg-slate-900 shadow-slate-500 shadow-md border-4 border-double border-slate-300 rounded-full relative">
//                                 <div class="h-2 bg-yellow-400 text-right rounded-full mx-1" style={{ width: {percentage} }}></div>
//                             </div>
//                         </div>

//     </>
//   );
// };

// export default SkillBar;
