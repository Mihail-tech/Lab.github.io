import React from "react";
import Navbar from "../Navbar";
import useStyles from "./style";


const About = () => {
    const classes = useStyles();
    return(
        <div>
            <Navbar />
            <div>
                <div className = {classes.decorationTitle}>
                    <h1>
                        Students Lab
                    </h1>
                </div>
                <div className = {classes.decorationTitle}>
                    <p>
                        Бесплатные IT-курсы и стажировки для начинающих.
                        Много практики с опытными менторами, удобный
                        график, шанс устроиться на работу в iTechArt после
                        обучения.
                    </p>
                </div>
                <div>
                    <span className = {classes.titleLab}>Students Lab — это:</span>
                    <ul className = {classes.list}>
                        <li className = {classes.point}>Реальный опыт</li>
                        <li className = {classes.point}>Менторы-профессионалы</li>
                        <li className = {classes.point}>Баланс теории и практики</li>
                        <li className = {classes.point}>Онлайн и оффлайн обучение</li>
                        <li className = {classes.point}>Гибкое расписание занятий</li>
                        <li className = {classes.point}>Job offer лучшим стажёрам</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}


export default About;