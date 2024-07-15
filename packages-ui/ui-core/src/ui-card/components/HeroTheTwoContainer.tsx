import React from "react";
import type { HeroTheTwoData } from "../types";
import HeroTheTwo from "./HeroTheTwo";
import '../style/style.css'; 
export type HeroTheTwoContainerProps = {
    cards: HeroTheTwoData[];
};

const HeroTheTwoContainer: React.FC<HeroTheTwoContainerProps> = (props) => {
    const { cards } = props;

    return (
        <div>
            
        <div className="w-full bg flex-wrap">
            {cards.map((card, i) => (
                <HeroTheTwo
                    key={i}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    imageAlt={card.imageAlt}
                />
            ))}
            
        </div>
        </div>
    );
};

export default HeroTheTwoContainer;