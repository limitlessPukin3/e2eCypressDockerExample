# A simple containerized react application with e2e Cypress test setup

# How to run application
```bash
git clone git@github.com:limitlessPukin3/e2eCypressDockerExample.git
cd e2eCypressDockerExample
docker build -t getting-started .
docker run -dp 3000:3000 getting-started
```
Application will start up using port 3000 (http://localhost:3000)

# How to run Cypress e2e test
```bash
cd e2eCypressDockerExample
docker-compose up --exit-code-from cypress
```
NOTE: Make sure that port 3000 is free (Only one instance can use this port)
NOTE: Automation test should be created in e2e/cypress/integration

# Requirements
Docker installed
Docker-compose
