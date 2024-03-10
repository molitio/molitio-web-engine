import { MenuPageData } from '@molitio/ui-core';
import { MenuPageDataCollection } from '@molitio/ui-core';
import greenHand from '../images/greenHand.jpg';
import pagesData from '../data/pagesData.json';

const imageUrlTest = greenHand;

const dataSourceMock = new Map<string, MenuPageData>(JSON.parse(pagesData));
console.log(dataSourceMock);

/* selectedPage: 'mealPage1', */
export const menuPageCollection: () => MenuPageDataCollection = (): MenuPageDataCollection => {
    return {
        menuPages: new Map<string, MenuPageData>([
            [
                'mealPage1',
                {
                    pageName: 'menuPage1',
                    menuItems: [
                        {
                            data: {
                                id: 'null0',
                                name: 'meal',
                                description: 'tasty',
                                imageUrl: imageUrlTest,
                                price: 12,
                                currency: 'EUR',
                            },
                        },
                        {
                            data: {
                                id: 'null0',
                                name: 'meal',
                                description: 'tasty',
                                imageUrl: imageUrlTest,
                                price: 12,
                                currency: 'EUR',
                            },
                        },
                    ],
                },
            ],
            [
                'mealPage2',
                {
                    pageName: 'menuPage2',
                    menuItems: [
                        {
                            data: {
                                id: 'null1',
                                name: 'meal',
                                description: 'tasty',
                                imageUrl: imageUrlTest,
                                price: 12,
                                currency: 'EUR',
                            },
                        },
                        {
                            data: {
                                id: 'null2',
                                name: 'meal',
                                description: 'tasty',
                                imageUrl: imageUrlTest,
                                price: 12,
                                currency: 'EUR',
                            },
                        },
                    ],
                },
            ],
        ]),
    };
};
