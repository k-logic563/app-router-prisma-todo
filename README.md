# app-router-prisma-todo

## setup

### database
```bash
$ docker-compose up -d
```

### prisma
```bash
$ cd application
# create database
$ npx prisma migrate dev --name init
# database seeding
$ npx prisma db seed
```

### application
```bash
$ cd application
# install dependencies
$ npm ci
# start dev server
$ npm run dev
```