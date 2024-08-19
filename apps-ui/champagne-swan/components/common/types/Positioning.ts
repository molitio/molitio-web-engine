/**
 * An object representing the positioning of an element.
 *
 * @typedef {Object} Positioning
 *
 * @property {string} [position] - The CSS position property.
 * @property {string} [top] - The CSS top property.
 * @property {string} [right] - The CSS right property.
 * @property {string} [bottom] - The CSS bottom property.
 * @property {string} [left] - The CSS left property.
 * @property {string} [transform] - The CSS transform property.
 * @property {string} [padding] - The CSS padding property.
 * @property {string} [margin] - The CSS margin property.
 * @property {string} [objectFit] - The CSS object-fit property.
 * @property {string} [zIndex] - The CSS z-index property.
 */

export type Positioning = {
    position?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    transform?: string;
    padding?: string;
    margin?: string;
    objectFit?: string;
    zIndex?: string;
};
