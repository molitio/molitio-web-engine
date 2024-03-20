export type Route = {
  displayText: string;
  requireAuth: boolean;
  href: string;
  hidden?: boolean;
};

export type RouteMap = {
  [key: string]: Route;
};
