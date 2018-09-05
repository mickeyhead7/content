build-content:
	docker-compose build services-content
	docker-compose build web-content

start-content:
	docker-sync start
	docker-compose up -d services-content
	docker-compose up -d web-content

stop-content:
	docker-sync stop
	docker-compose stop services-content
	docker-compose stop web-content
