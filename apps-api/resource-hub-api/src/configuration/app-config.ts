/**
 * Configuration for the application. (currently hard coded, should be dynamic based on evironment context)
 */
enum Host {
    container = 'resource-hub-db',
    localhost = 'localhost',
}

const activeHost = Host.localhost;
export const activePort = 4001;

export const defaultConfig = {
    resourceDatabaseUrl: `mongodb://resource-hub-agent:secret-password@${activeHost}:27017/resource`,
    userPrivateDatabaseUrl: `mongodb://resource-hub-agent:secret-password@${activeHost}:27017/user-private`,
    userPublicDatabaseUrl: `mongodb://resource-hub-agent:secret-password@${activeHost}:27017/user-public`,
    specificationLabelDatabaseUrl: `mongodb://resource-hub-agent:secret-password@${activeHost}:27017/specification-label`,
    initializeDatabase: true,
};
