// ContentSegment is a flexible record for storing text content node types and other content data for UI display
export type TextContentSegment = Record<string, TextContentNode>;

// A text content node type for UI display
export type TextContentNode = {
    contentTitle?: string;
    textContent?: Record<string, string>;
    // Extend with more fields as needed for UI (images, links, etc.)
};
