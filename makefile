backend:
	cd packages/backend; npx hardhat compile

frontend:
	cd packages/frontend; npm run build

all: frontend backend

clean: 
	rm -rf packages/backend/artifacts
	rm -rf packages/backend/cache
	rm -rf packages/frontend/.next

local_chain:
	fuser -k 8545/tcp || true
	HARDHAT_NETWORK=localhost cd packages/backend; npx hardhat node 

dev: backend
	cd packages/backend; npx hardhat run scripts/deploy.js
	cd packages/frontend; npm run dev

	