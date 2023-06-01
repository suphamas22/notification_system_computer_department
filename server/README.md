# nodejs-ts-express-mvc-starter-template

### how to create node.js express application

#### npm init -y

#### install package

```
yarn add express dotenv cors
yarn add -D typescript @types/express @types/cors @types/node nodemon concurrently 
npm i -g ts-node
```

#### add swagger 
```
yarn add swagger-ui-express swagger-jsdoc swagger-express-ts
yarn add -D @types/swagger-ui-express @types/swagger-jsdoc
```

#### new .env file
```
PORT = 5000 | "whanever you port"
```


#### initial tsc

```
npx tsc --init
```

- tsconfig.json
```
{
  "compilerOptions": {
    "outDir": "./dist"

    // rest options remain same
  }
}
```




#### add script

```
{
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
  }
}
```


#### install sequelize
```
yarn add sequelize sequelize-typescript mysql2 
yarn add -D @types/sequelize @types/express
```