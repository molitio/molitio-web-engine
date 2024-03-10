export type ButtonProps = {
    type: ButtonType;
    onClick?: () => void;
} & React.PropsWithChildren;

export enum ButtonType {
    Primary,
    Secondary,
}
