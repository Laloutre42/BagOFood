# Build bagofood-client
gulp build --env=prod
docker build -t laloutre42/docker-bagofood .

# Run bagofood-client
docker stop bagofood-client
docker rm bagofood-client
docker run --name bagofood-client -d -p 80:80 laloutre42/docker-bagofood