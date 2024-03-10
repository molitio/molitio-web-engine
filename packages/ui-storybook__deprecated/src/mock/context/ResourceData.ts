import { Resource, Category } from '@molitio/ui-core__deprecated';

export const fillResources = () => {
    const tajkepGyujtemeny: Record<string, Resource> = Object.create({
        kepegy: {
            resourceId: 'mockId01',
            imageTag: '01',
            imageUrl: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/nature1.jpg',
        },
        kepketto: {
            resourceId: 'mockId02',
            imageTag: '02',
            imageUrl: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/nature2.jpg',
        },
        kepharom: {
            resourceId: 'mockId03',
            imageTag: '03',
            imageUrl: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/nature3.jpg',
        },
        kepnegy: {
            resourceId: 'mockId04',
            imageTag: '04',
            imageUrl: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/natura4.jpg',
        },
        kepot: {
            resourceId: 'mockId05',
            imageTag: '05',
            imageUrl: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/still_life1.jpg',
        },
        kephat: {
            resourceId: 'mockId06',
            imageTag: '06',
            imageUrl: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/still_life2.jpg',
        },
    });

    return tajkepGyujtemeny;
};

export const fillCategories = () => {
    const paintingGallery: Record<string, Category> = Object.create({
        tajkep: {
            categoryName: 'Tájkép',
            dataSource: 'mock',
            resources: fillResources(),
        },
        eletkep: {
            categoryName: 'Életkép',
            dataSource: 'mock',
            resources: fillResources(),
        },
        portrait: {
            categoryName: 'Portré',
            dataSource: 'mock',
            resources: fillResources(),
        },
    });

    return paintingGallery;
};
