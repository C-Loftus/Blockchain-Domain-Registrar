#!/bin/bash

cd packages/backend; npx hardhat compile; npx hardhat; npx hardhat run scripts/deploy.js
cd packages/frontend; npm run build