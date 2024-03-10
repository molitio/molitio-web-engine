export interface ComponentCollection {
    components: Map<string, () => JSX.Element>;
}
