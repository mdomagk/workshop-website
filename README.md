# workshop-website

Website for [ICHQP workshop](https://ichqp-workshop.org/) build with [Astro](https://astro.build/) using the [Astrowind](https://astrowind.vercel.app/) template

### Requirements

- [Node.js](https://nodejs.org/en) - v18.17.1 or v20.3.0 or higher. ( v19 is not supported.)
- Text editor - e.g. [VS Code](https://code.visualstudio.com/) with Astro extension.
- Terminal - Astro is accessed through its command-line interface (CLI) e.g. Powershell on windows.

### Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `npm install`       | Installs dependencies                              |
| `npm run dev`       | Starts local dev server at `localhost:3000`        |
| `npm run build`     | Build your production site to `./dist/`            |
| `npm run preview`   | Preview your build locally, before deploying       |
| `npm run check`     | Check your project for errors                      |
| `npm run fix`       | Run Eslint and format codes with Prettier          |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro preview` |

### Customize Design

To customize Font families, Colors or more Elements refer to the following files:

- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`

### Deploy

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.
