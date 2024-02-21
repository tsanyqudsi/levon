<p align="center">
	<picture>
		<source media="(prefers-color-scheme: dark)" srcset="./apps/playground/public/logo-white.svg?sanitize=true">
		<source media="(prefers-color-scheme: light)" srcset="./apps/playground/public/logo-black.svg?sanitize=true">
		<img alt="Logo Levon" src='./apps/playground/public/logo.svg?sanitize=true' width="230"/>
	</picture>
</p>

# Levon, an effort to make Visual Novel Engine.

> [!WARNING]
> This is still in early development, not even working.


Remember that book you couldn't put down, wishing you could steer the characters, influence the plot? Yearn for stories that react to your every choice, where you're not just a reader, but the architect of the adventure?

*Levon* is trying to unlocks that world. Now imagine:

- Storylines branching and diverging with each decision you make.
- Compelling characters coming alive through art and expressive dialogue.
- Music, sound, and immersive elements that heighten the emotional impact.

Interesting enough ?

> [!NOTE]
> Characters and Background used on playground is taken from [Noraneko Games](https://noranekogames.carrd.co/)

## What's inside?

This Monorepo includes the following packages/apps:

### Apps, Packages, and Configs

- `docs`: a [Next.js](https://nextjs.org/) app.
- `storybook`: a [Storybook](https://storybook.org/) app.
- `template`: a template for easy [Loven](https://loven.github.io/) visual novel development.
- `@levon/core-react`: a Loven React core component library.
- `eslint-config-sqood`: `eslint` configuration.
- `prettier-sqood`: `prettier` configuration.
- `@levon/typescript-config`: `tsconfig.json`s used throughout the monorepo // not yet built
  
Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

// still under constructions

### Build

To build all apps and packages, run the following command:

```
cd levon
npm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd levon
npm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd levon
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
