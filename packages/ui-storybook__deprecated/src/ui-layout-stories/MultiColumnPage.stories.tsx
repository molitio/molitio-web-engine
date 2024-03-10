import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
    Logo,
    MultiColumnPage,
    CircleGradientHighlightSVG,
    LayoutColumn,
    MultiColumnLayout,
} from '@molitio/ui-core__deprecated';

export default {
    title: 'molitio-core/Layout/Multi Column Page',
    component: MultiColumnPage,
} as ComponentMeta<typeof MultiColumnPage>;

export const MultiSegmentedPageStructure: ComponentStory<typeof MultiColumnPage> = () => (
    <MultiColumnPage
        pageSections={[
            {
                anchor: 'one',
                element: (
                    <MultiColumnLayout
                        layoutColumns={[
                            <LayoutColumn key={'col1'}>
                                <h1>im on the left</h1>
                            </LayoutColumn>,
                            <LayoutColumn key={'col2'}>
                                <CircleGradientHighlightSVG dimensions={{ width: '100%', height: '100%' }}>
                                    <Logo
                                        url={`https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/ui-molitio-com/pexels-kalai-selvam-800752.jpg`}
                                        opacity={0.8}
                                    />
                                </CircleGradientHighlightSVG>
                            </LayoutColumn>,
                            <LayoutColumn key={'col3'}>
                                <h1>this is on the right</h1>
                            </LayoutColumn>,
                        ]}
                    />
                ),
            },
            {
                anchor: 'two',
                element: (
                    <MultiColumnLayout
                        layoutColumns={[
                            <LayoutColumn key={'col1'}>
                                <h1>im on the left</h1>
                            </LayoutColumn>,
                            <LayoutColumn key={'col2'}>
                                <h1>im on the left</h1>
                            </LayoutColumn>,
                            <LayoutColumn key={'col3'}>
                                <h1>im on the left</h1>
                            </LayoutColumn>,
                            <LayoutColumn key={'col4'}>
                                <h1>im on the left</h1>
                            </LayoutColumn>,
                        ]}
                    />
                ),
            },
            {
                anchor: 'tree',
                element: (
                    <MultiColumnLayout
                        layoutColumns={[
                            <LayoutColumn key={'col1'}>
                                <h1>im on the left</h1>
                            </LayoutColumn>,
                            <LayoutColumn key={'col2'}>
                                <h1>hi, this is center</h1>
                            </LayoutColumn>,
                            <LayoutColumn key={'col3'}>
                                <h1>this is on the right</h1>
                            </LayoutColumn>,
                        ]}
                    />
                ),
            },
        ]}
    ></MultiColumnPage>
);

MultiSegmentedPageStructure.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
