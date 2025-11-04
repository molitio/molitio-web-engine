import { Logger } from '@nestjs/common';

export function logError(error: Error, moduleContext: string): void {
    const stack = error.stack;
    const caller = stack?.split('\n')[2]?.trim()?.split(' ')[1]?.split('.')[1] || 'unknown';
    const functionName = caller.replace(/[^a-zA-Z0-9_]/g, '');
    Logger.error(`Error in ${moduleContext}.${functionName}:`, error);
}
