This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Live demo: https://desafio-pedido-pago.vercel.app/

## Design Explanations
Component structure
I chose to use the Atomic Design model to separate the components, in my opinion it's a scalable model that allows the location and use of reusable components in a more understandable way
Custom hooks
useGetApi: Returns an array of three positions, the first is a function that will do our request, it accepts one parameter that in this case is the URL of the request, I didn't make it receive more parameters like a query because this project doesn't need this kind of parameter, but it's easily implemented. The second position is a state that holds the data returned in the api. And lastly, a state that returns the loading of the request 

useWindowSize: Returns an object with two items, the first is the width of the user window (widthWindow) and the second is the height of the user window (heightWindow)

Scripts
Dev: Starts the local server for the project;
test: Starts the tests with JEST ignoring the Cypress tests.
cypress:open: Opens the cypress test window.


## Technologies and tools used:
`React.JS (with Next.Js)`
`Javascript (with TypeScript)`
`Styled-components`
`Axios`
`EsLint`
`Prettier`

## Getting Started

First, run `npm install` and the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
