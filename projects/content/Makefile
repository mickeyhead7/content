build:
	docker-compose build services-content
	docker-compose build applications-web

start:
	docker-sync start
	docker-compose up -d services-content
	docker-compose up -d applications-web

stop:
	docker-sync stop
	docker-compose stop services-content
	docker-compose stop applications-web
