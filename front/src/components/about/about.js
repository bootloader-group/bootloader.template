import React from 'react';
import {useSelector} from 'react-redux';

const About = () => {
    const info = useSelector(state => state.dummyInfo);

    return (
        <section className="about">
            <div className="container">
                <span className="about__name">{info.appName}</span>
            </div>
        </section>
    )
};

export default About;