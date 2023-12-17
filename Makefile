docker-run-prod:
	docker compose up

docker-run-test:
	docker compose -f docker-compose.test.yml up  --abort-on-container-exit

build:
	npm run build

test:
	npm test

dev:
	npm run dev

start: build
	npm start

