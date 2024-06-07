import React from 'react';
import cls from "./Main.module.scss"
import goldFish1 from "../../images/gold_fish.png"
import blueFish1 from "../../images/blue_fish.png"
import violetFish from "../../images/violet_fish.jpg"

function Main(props) {
    return (
        <div className={cls.main}>
            <div className={cls.first_screen}>
                <div className={cls.title0}>
                    <h1 className={cls.title1}>Happy Fish<br />Happy People</h1>
                    <p className={cls.title2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum rem obcaecati minus reprehenderit!</p>
                    <button className={cls.button1}>Explore now</button>
                    <div className={cls.cards_main}>
                        <div className={cls.one_card_main}>
                            <h1 className={cls.title_num}>32</h1>
                            <p className={cls.text_num}>Shops</p>
                        </div>
                        <div className={cls.one_card_main}>
                            <h1 className={cls.title_num}>25+</h1>
                            <p className={cls.text_num}>Year's<br />experience</p>
                        </div>
                        <div className={cls.one_card_main}>
                            <h1 className={cls.title_num}>500k+</h1>
                            <p className={cls.text_num}>Happy<br />customers</p>
                        </div>
                    </div>
                </div>
                <img className={cls.img1} src={goldFish1} alt="" />
            </div>

            <div className={cls.second_screen}>
                <img className={cls.img2} src={blueFish1} alt="" />
                <img className={cls.img3} src={violetFish} alt="" />
                <div className={cls.text_second_screen}>
                    <h1 className={cls.title3}>Explore All The Incredible Creatures</h1>
                    <ul className={cls.list1}>
                        <li className={cls.li1}>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li className={cls.li1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, ipsum!</li>
                        <li className={cls.li1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam!</li>
                        <li className={cls.li1}>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Main;