import Card from './Card';
import type { CardData } from '../types';
import PageSection from '../../ui-page/components/PageSection';
export type CardContainerProps = {
    cards: CardData[];
};

export default function CardContainer({ cards }: CardContainerProps) {
    return (
        <PageSection>
            <ul className="flex flex-col xl:flex-row gap-12">
                {cards.map((card, i) => (
                    <li key={i} className="mb-gutter-bottom">
                        <Card data={card} />
                    </li>
                ))}
            </ul>
        </PageSection>
    );
}
