# Docker + Lumen with React and MsSql

## Why?

Setting up an entire Lumen stack can be time consuming. This repo is a quick way to write apps in PHP using Lumen from an any Docker client. It uses docker-compose to setup the application services, databases, cache, etc...

# Setup

## 1. Docker

### [Docker for Mac](https://docs.docker.com/docker-for-mac/)

### [Docker for Windows](https://docs.docker.com/docker-for-windows/)

### [Docker for Linux](https://docs.docker.com/engine/installation/linux/)

## 2. Clone this repo

```bash
git clone https://github.com/SoftwareArtemis/react-laravel-assessment.git
cd react-laravel-assessment
```

## 3. Run Docker Compose

now, create 3 containers

### Build & Run

```bash
docker-compose up -d --build
```

## 4. Backend Configuration

There is one configuration  using `.env` file in `./source/backend`.

```sh
# copy .env.example file and make changes to them if needed
cp .env.docker.example .env
```

For Backend API navigate to [http://localhost:8080](http://localhost:8080) and you should see something like this
```sh
Lumen (8.3.4) (Laravel Components ^8.0)
```

Success! You can now start developing your Lumen app on your host machine and you should see your changes on refresh! Classic PHP development cycle. A good place to start is `source/backend/routes/web.php`.

## 5. Connect to the database

Using the mssql client of your choice (for example 'Microsoft SQL Server Management Studio') use the credentials below to connect:
```sh
127.0.0.1, 21433
login: sa
password: Pass@word
```

Create Database `example`

## 6. Running Artisan commands
Database setup

```sh
# inside the container
php artisan install
or
php artisan migrate
php artisan db:seed
```
## 7. Test the React application

For the Frontend navigate to [http://localhost:3001](http://localhost:3001) and you should see something like this
```sh
Edit src/App.js and save to reload.
```

# The Exercise

## For Lumen
#### - Create a relationship between the data and category within the model that already exists `ExampleModel`.

#### - Use the `ExampleController` to display the data as JSON with its categories.

```sh
http://localhost:8080/Example/data
```

## For React

#### - Create a slice to fetch data from the above URL.

#### - Make a component that will display these results using JSX.

## Contribute

Submit a Pull Request!
