# Molitio Web Engine Monorepo Build Strategy

## Overview

This document outlines the build strategy for the Molitio Web Engine monorepo. The monorepo is a collection of packages that are managed by a single repository. The build strategy is designed to streamline the development process and ensure consistency across all packages.

## Goals

The build strategy for the Molitio Web Engine monorepo is designed to achieve the following goals:

  - commands issued from the root project directory should be able to build all packages
  - during development provide a holistic environment for platfrom development
  - each component should be able to be built and tested independently. The build artifacts should be stored in the `packages/package-name/dist` directory of each package and for publish step to be moved in the root `.artifacts` directory by a root publish and build steps.