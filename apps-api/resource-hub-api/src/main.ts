import { activePort } from './configuration';
import { MWEApp } from './MWEApp';

const appInstance = new MWEApp(activePort);
appInstance.start();

process.on('SIGINT', () => {
    appInstance.shutdown();
});
