lint:
	npm run lint

install:
	npm ci

start:
	npm run dev

build:
	rm -rf dist
	npm run build

.PHONY: test 