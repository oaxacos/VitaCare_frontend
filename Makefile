ifndef VERBOSE
	MAKEFLAGS += --no-print-directory
endif

## help: print this help message
.PHONY: help
help:
	@echo "Usage:"
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'

## dev: run the development server
.PHONY: dev
dev:
	pnpm dev

## install: install the project dependencies
.PHONY: install
install:
	pnpm install

## build: build the project
.PHONY: build
build:
	pnpm build

## start: start the project in production mode
.PHONY: start
start:
	pnpm start

## lint: lint the project
.PHONY: lint
lint:
	pnpm lint

## fmt: format the project
.PHONY: fmt
fmt:
	pnpm format

## test: run the tests
.PHONY: test
test:
	pnpm test

## shell: start a shell in the development container
.PHONY: shell
shell:
	@echo "Starting a shell in the development container..."
	devbox shell

pre-commit: lint
