.PHONY: build setup install bash bash-root

build:
	docker-compose pull --ignore-pull-failures; \
	docker-compose build;

setup: build
	docker-compose run --user=root:root --rm player mkdir -p /home/server; \
	docker-compose run --user=root:root --rm player chown -R 1000:1000 /home/server; \
	docker-compose run --user=root:root --rm player chown -R 1000:1000 /usr/src/app;

install: setup
	docker-compose run --user=root:root --rm player npm install;

bash:
	docker-compose run --rm player bash;

bash-root:
	docker-compose run --user=root:root --rm player bash;