import { TPageContent } from '../components/common/type/TPageContent';
import * as siteContentDataRelease from '../data/siteContentDataRelease.json';

const getMockDataCollection = (): Map<string, TPageContent> => {
    const contentString = JSON.stringify(siteContentDataRelease.pageContentCollection);
    const contentDataCollection = new Map<string, TPageContent>(JSON.parse(contentString));
    return new Map([...contentDataCollection]);
};

export const sitePageContentCollection = async (): Promise<Map<string, TPageContent> | undefined> => {
    try {
        const content = getMockDataCollection();
        return content;
    } catch (error) {
        //TODO: log error
    }
};
