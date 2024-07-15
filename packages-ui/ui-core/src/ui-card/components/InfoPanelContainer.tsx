import React from "react";
import type { InfoPanelData } from "../types";
import InfoPanel from "./InfoPanel";
import '../style/style.css';

export type InfoPanelContainerProps = {
    cards: InfoPanelData[];
};

const InfoPanelContainer: React.FC<InfoPanelContainerProps> = (props) => {
    const { cards } = props;

    return (
        <div className="relative w-full overflow-hidden rounded-lg">
            <div className="squareRight"></div>
            <div className="relative w-full flex-col align-items-center justify-center">
                {cards.map((card, i) => (
                    <InfoPanel
                        key={i}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default InfoPanelContainer;

