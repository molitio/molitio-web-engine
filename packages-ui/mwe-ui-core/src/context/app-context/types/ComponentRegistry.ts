import { ComponentType } from 'react';

export type ComponentRegistry = Record<string, ComponentType<{ data: unknown }>>;
