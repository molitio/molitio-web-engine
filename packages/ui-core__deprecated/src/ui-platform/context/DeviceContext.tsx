import React from 'react';
import { DeviceTypes } from '../types';

const DeviceContext = React.createContext<DeviceTypes>({
    device: 'web',
});

export default DeviceContext;
