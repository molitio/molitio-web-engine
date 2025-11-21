import { RouterProvider } from '@tanstack/react-router';
import { AppRouter } from '../MWEClientAppProvider';

export type ClientRouteProviderProps = {
    router: AppRouter;
};

export default function ClientRouteProvider({ router }: ClientRouteProviderProps) {
    return <RouterProvider router={router} />;
}
