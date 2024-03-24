
[Molitio Web Engine](../../../README.md)

[Wiki Home](../Home.md)

## Getting started
 
 The project is best to run in a linux environment. On Windows it is reccomended to use WSL 2. After coloning the repository a few steps need to be performed in order to run the poject.

 :rocket: Install the Molitio Web Engine by running the following commands
  * ``` corepack enable ``` to enable corepack.  1 time / dev environment, to be integrated in a development container in future versions
  * ``` yarn set version 4.1.1 ``` to set the version of yarn /  1 time / dev environment, to be integrated in a development container in future versions
  * ``` yarn bootstrap ``` that runs initialization of the yarn SDKs
  * ``` yarn ci:install ```  to install all dependencies for development and build process
  * ``` yarn build ``` to build the project
  * ``` yarn dev ``` to run the development server with hot module replacement (HMR)

  * ``` yarn i ``` to install dependencies when dependancy tree changed. This will over write the yarn.lock file.

  * ``` yarn test:watch ``` to run the tests in watch mode

## Developer Certificate of Origin

In a future it is planed to introduce commit sign off, to ensure that the code is not being contributed by a third party.

[Developer Certificate of Origin](DeveloperCertificateOfOrigin.md)

