/**
 * Creates a new Date and returns it in UNIX timestamp in milliseconds format (milliseconds since epoch).
 * @returns {number} The current UNIX timestamp in milliseconds.
 */
export function newTimestamp(): number {
    return new Date().getTime();
}

/**
 * Converts a UNIX timestamp (in milliseconds) to a local date-time string.
 * @param timestamp - The UNIX timestamp in milliseconds since epoch.
 * @returns {string} The local date-time string in a readable format.
 */
export function getLocalDateTime(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toLocaleString();
}
