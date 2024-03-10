type SystemTheme<T> = {
    themeName: string;
} & T;

export type AppShellProps<ThemeType> = {
    theme: SystemTheme<ThemeType>;
} & React.PropsWithChildren;
