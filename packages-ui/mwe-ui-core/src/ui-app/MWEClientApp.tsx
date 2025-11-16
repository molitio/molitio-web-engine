import { RouterProvider } from '@tanstack/react-router';
import { AppRouter } from './MWEClientAppProvider';

export type MWEClientAppProps = {
    router: AppRouter;
};

export default function MWEClientApp({ router }: MWEClientAppProps) {
    return <RouterProvider router={router} />;
}
