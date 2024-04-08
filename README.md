## Run Project

#### Install all dependencies

```bash
npm i
# or
yarn
# or
pnpm i
```

#### Setting env

```bash
cp .env.example .env
```

#### Development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

#### Production server:

```bash
npm run build && npm run start
# or
yarn build && yarn start
# or
pnpm build && pnpm start
```

## Test Logic

```bash
npx ts-node test_logic/01.ts

npx ts-node test_logic/02.ts

npx ts-node test_logic/03.ts

npx ts-node test_logic/04.ts
```
