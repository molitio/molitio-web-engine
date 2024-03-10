import React from 'react';
import { CirclePatternSvg, StyledCirclePattern } from '../styles';

class Circle {
    x: number;
    y: number;
    rad: number;
    constructor(x: number, y: number, rad: number) {
        this.x = x;
        this.y = y;
        this.rad = rad;
    }
}

const findPoint = (cx: number, cy: number, rad: number, cornerGrad: number) => {
    const cornerRad = (cornerGrad * Math.PI) / 180;
    const nx = Math.cos(cornerRad) * rad + cx;
    const ny = Math.sin(cornerRad) * rad + cy;
    return { x: nx, y: ny };
};

type CirclePatternProps = {
    r: number;
    strokeWidth: number;
    outerRimCount: number;
};

const CirclePattern: React.FC<CirclePatternProps> = (props) => {
    const { r, strokeWidth, outerRimCount } = props;

    const [circles, setCircles] = React.useState<Circle[]>([]);

    React.useEffect(() => {
        setCircles(createPattern());
    }, [r, strokeWidth, outerRimCount]);

    const createPattern = () => {
        const rad = r;
        const centerCircle = new Circle(400, 400, rad);
        const circleBuilder: Circle[] = [];
        circleBuilder.push(centerCircle);

        for (let i = 0; i < outerRimCount; i++) {
            circleBuilder.push(...createCornerCircles(circleBuilder[i], rad + 2));
        }

        return circleBuilder;
    };

    const createCornerCircles = (circle: Circle, rad: number) => {
        const cornerCircles: Circle[] = [];
        for (let i = 0; i < 6; i++) {
            const cornerGrad = i * 60;
            const point = findPoint(circle.x, circle.y, circle.rad, cornerGrad);
            const cornerCircle = new Circle(point.x, point.y, rad);
            cornerCircles.push(cornerCircle);
        }

        return cornerCircles;
    };

    return (
        <StyledCirclePattern>
            <label> {`circles ${circles.length}`}</label>
            <CirclePatternSvg viewBox="0 0 4200 4200">
                {circles.map((circle, i) => (
                    <circle
                        key={i}
                        cx={circle.x}
                        cy={circle.y}
                        r={circle.rad}
                        strokeWidth={strokeWidth}
                        stroke="blue"
                        fill="none"
                    />
                ))}
            </CirclePatternSvg>
        </StyledCirclePattern>
    );
};

export default CirclePattern;
