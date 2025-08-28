// EXPERIMENTAL TYPE MODELS FOR UI NOT IN CURRENT USE

export type ResourceId = string;

export type SpecificationLabel = {
    key: string;
    value: string;
};

export type Resource = {
    id: ResourceId;
    name: string;
    labels: SpecificationLabel[];
};

export type Person = {
    id: string;
    name: string;
    avatarUrl?: string;
};

export type Organisation = {
    id: string;
    name: string;
    members: Person[];
    logoUrl?: string;
};

export type Location = {
    id: string;
    name: string;
    type: 'room' | 'building' | 'city' | 'region' | 'global';
    coordinates?: { lat: number; lng: number };
};

export type ResourceStatus = 'desired' | 'contributed';

export type ResourceOwner = Person | Organisation | Location;

export type ResourceView = {
    resource: Resource;
    status: ResourceStatus;
    owner: ResourceOwner;
    timestamp: string; // ISO date
};

export type Transaction = {
    id: string;
    resource: Resource;
    from: ResourceOwner;
    to: ResourceOwner;
    status: ResourceStatus;
    timestamp: string; // ISO date
    retroactive?: boolean;
};

export type Desideratum = {
    owner: ResourceOwner;
    resources: ResourceView[];
};

export type Contribution = {
    owner: ResourceOwner;
    resources: ResourceView[];
};
