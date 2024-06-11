/**
 * Configuration for the application. (currently hard coded, should be dynamic based on evironment context)
 */
export const defaultConfig = {
    resourceDatabaseUrl: 'mongodb://resource-hub-agent:start@localhost:27017/resource',
    userPrivateDatabaseUrl: 'mongodb://resource-hub-agent:start@localhost:27017/user-private',
    userPublicDatabaseUrl: 'mongodb://resource-hub-agent:start@localhost:27017/user-public',
    specificationLabelDatabaseUrl: 'mongodb://resource-hub-agent:start@localhost:27017/specification-label',
    initializeDatabase: true,
};
