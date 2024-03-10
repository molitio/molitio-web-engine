import React from 'react';
import { Content, LeftColumnElements, CenterColumnElements, RightColumnElements } from '../styles';

type DefaultFooterProps = {
    leftColumnElements: JSX.Element[];
    centerColumnElements: JSX.Element[];
    rightColumnElements: JSX.Element[];
};

const DefaultFooter: React.FC<DefaultFooterProps> = (props) => {
    const { leftColumnElements, centerColumnElements, rightColumnElements } = props;

    return (
        <footer>
            <Content>
                <LeftColumnElements>
                    {leftColumnElements.map((element, i) => (
                        <div key={i}>{element}</div>
                    ))}
                </LeftColumnElements>

                <CenterColumnElements>
                    {centerColumnElements.map((element, i) => (
                        <div key={i}>{element}</div>
                    ))}
                </CenterColumnElements>

                <RightColumnElements>
                    {rightColumnElements.map((element, i) => (
                        <div key={i}>{element}</div>
                    ))}
                </RightColumnElements>
            </Content>
        </footer>
    );
};

export default DefaultFooter;
