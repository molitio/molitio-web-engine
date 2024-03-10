import React from 'react';
import { ComponentTags } from '../../ui-style-service';

type MolitioComponentParams<T, DataSchema, StyleVariant> = T & { data?: Partial<Record<string, DataSchema>> } & {
    style?: Partial<Record<string, StyleVariant>>;
} & {
    tag?: ComponentTags;
    //TODEV: resolve tag for geolocation and urgency weight
};

type DataSchema<D> = D | null;

type StyleVariant<S> = S | null;

/**
 * Give T as component type data shape and applied styles
 * @param T component type
 * @param DataSchema shape of the expected data
 * @param StyleVariant style variant of the component
 * type MolitioComponent<T, DataSchema, StyleVariant> = React.FC<MolitioComponentParams<T, D, StyleVariant>>
 */
export interface MolitioComponent<T, D, S> extends React.FC<MolitioComponentParams<T, DataSchema<D>, StyleVariant<S>>> {
    params?: T[];
    data?: DataSchema<D>;
    style?: StyleVariant<S>;
}
