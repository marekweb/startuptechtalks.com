# Startup Tech Talks website

## How to add or modify pages of the website

The website is built with React as a [Next.js](https://nextjs.org/) project.

Each file in the `/pages` directory is automatically

Each page is a React component.

To add a new page: just add a new file in the `/pages` directory.

## How to add static files (assets like images and css)

All assets are in the `/static` directory and are served under the `/static` prefix.

In other words `/static/style.css` is available on the website as `/static/style.css`. Only the `/static` directory is used to serve assets.

## How to edit the CSS

All styles for the website are in a plain CSS file: `/static/style.css`

The CSS file was originally created for the old website, so there are still some old styles in there which are no longer used. It just hasn't been cleaned up.

## How to work on the website locally

You need to have node.js and `npm` to run the website.

First, clone the repository.

```sh
git clone git@github.com:marekweb/startuptechtalks.com.git
```

In the repository directory, install the Node.js modules with `npm`

```sh
npm install
```

## Run the localhost development server

To start the development server on `localhost:3000`:

```sh
npm start
```

## Automatically format the source code

To format the code with `prettier`:

```sh
npm run format
```

It's a good idea to do this before committing any changes.

## How the website is deployed to the server

The website is hosted on [Netlify](https://www.netlify.com/) and is configured to automatically deploy the latest version of the website when an update is pushed to the `master` branch.

In other words to deploy an update, we just push to `master` and then within a minute or two it will be deployed to production if there are no build errors.
