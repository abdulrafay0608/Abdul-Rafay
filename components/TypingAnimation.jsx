"use client"

import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const TypingAnimation = () => {
    useEffect(() => {
        const target = document.getElementById('typing-animation');

        if (target) {
            const typewriter = new Typewriter(target, {
                loop: true,
                delay: 100,
            });
            typewriter
                .pauseFor(500).typeString('Front-End Developer|').pause(1000).deleteAll()
                .typeString('Web Developer|').pause(1000).deleteAll()
                .typeString('App Developer|').pause(1000).deleteAll()
                .typeString('Freelancer|').pause(1000).deleteAll()
                .start();
        }
    }, []);

    return <div id="typing-animation"></div>;
};

export default TypingAnimation;
