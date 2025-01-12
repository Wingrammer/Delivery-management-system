![React Js Next Js Remix Js Tailwind Css website development png](https://github.com/maruffahmed/Delivery-management-system/assets/39343312/ebec87ff-2595-4863-8146-0985301ca262)

# Delivery Management System

### [Demo](https://Flash delivery.up.railway.app/)

Demo credential

```
Merchant panel
email: maruffamd@gmail.com
password: 123456

Admin panel
URLpath: /admin
email: admin@gmail.com
password:123456

Package handler panel (Pickup man)
URLpath: /packagehandler
email: reyad@gmail.com
password:123456

Package handler panel (Delivery man)
URLpath: /packagehandler
email: tushar@gmail.com
password:123456
```

## Getting Started

This instruction will get you a copy of this project up and running on your local machine

### Prerequisites

You need [Node JS](https://nodejs.org) (v18.x.x) installed on your local machine.

### Installing ⚙️

Run the followning command to install all the packages:

```sh
npm run setup
```

#### Setup Environment Variable

Set the following environment variable to `backend` directory. Also, an example file is given with the name of `.env.example`:

```
PORT = 8000
DATABASE_URL = "mysql://root:password@localhost:3306/delivery"
JWT_SECRET = 'ANYTHING_YOU_LIKE'
BCRYPT_SALT_OR_ROUNDS = "10"
```

Set the following environment variable to `frontend` directory. Also, an example file is given with the name of `.env.example`:

```
SESSION_SECRET = "dearMj"
API_BASE_URL = "http://localhost:8000"
```

### Database Migration 💿

Run the followning command to migrate the prisma schema:

```sh
npm run prisma:migrate
```

You only have to run this for only one time at the beginning of project setup

#### Seed Database 🌱

Run the following command to seed your database with some preset dataset. It includes delivery area info (Division, Districs, Areas), Delivery zones, Parcel pricing (for 0.5KG, 1KG, 2KG, 3KG, 4KG, 5KG), Parcel products categories, Shop products categories, a default user and admin, etc.

```sh
cd backend
npm run seed
```

#### Run 🏃🏻‍♂️

By this command your app and server will be run concurrently

```sh
npm start
```

An server will be run at http://localhost:8000 <br/>
And frontend server will be run at http://localhost:3000

## Screenshots

![screencapture-localhost-3000-dashboard-2023-06-01-12_32_30](https://github.com/maruffahmed/Delivery-management-system/assets/39343312/ccfabd6d-d373-48a7-be38-f972f5b87f55)
![screencapture-localhost-3000-create-parcel-2023-06-01-12_39_06](https://github.com/maruffahmed/Delivery-management-system/assets/39343312/7f66aaac-773e-4119-94fe-1678f8eba033)
![screencapture-localhost-3000-parcel-list-2023-06-01-12_39_44](https://github.com/maruffahmed/Delivery-management-system/assets/39343312/00bea019-8104-4ded-aa21-64e77a98c8cb)
![screencapture-localhost-3000-parcel-tracking-2023-06-01-12_38_51](https://github.com/maruffahmed/Delivery-management-system/assets/39343312/7aef905c-c465-4485-9f31-ed575910e101)
![screencapture-localhost-3000-payments-list-2023-06-01-12_39_52](https://github.com/maruffahmed/Delivery-management-system/assets/39343312/3c69f6cc-7e6d-4cf0-a806-4922c6da8b7d)
![screencapture-localhost-3000-shop-list-2023-06-01-12_39_59](https://github.com/maruffahmed/Delivery-management-system/assets/39343312/13e29ab3-26f4-4d2a-977b-b5af724d3752)
![screencapture-localhost-3000-shop-list-2023-06-01-12_40_11](https://github.com/maruffahmed/Delivery-management-system/assets/39343312/442cd9fb-8558-44ff-8013-1388e32f8584)
![screencapture-localhost-3000-settings-password-2023-06-01-12_40_33](https://github.com/maruffahmed/Delivery-management-system/assets/39343312/a1017fd5-d649-4c92-92fb-cbde1d49090c)

## Built With 🏗️👷🏻

-   [NodeJs](https://nodejs.org/en/) - Node.js® is an open-source, cross-platform JavaScript runtime environment.
-   [NestJs](https://nestjs.com/) - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
-   [Prisma](https://nestjs.com/) - Next-generation Node.js and TypeScript ORM
-   [Remix](https://remix.run/) - Remix is a full stack web framework
-   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes
-   [Chakra UI](https://chakra-ui.com/) - Chakra UI is a simple, modular and accessible component library

## Credit

## Authors

-   **Md Maruf Ahmed** - _Software Engineer_
