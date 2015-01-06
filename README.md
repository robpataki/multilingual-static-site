# Multilingual static site

This repo only for proof of concept, so that I can see how it can be achieved to set up a Yeoman project, which has multilingual support.

## Main goals

- Same layout, same content, multiple languages
- Use generated static HTML pages instead of loading contents with JavaScript
- Localisation would be great!
- Each language should have their own canonical URL for their pages
- Layout and content / development and content should be separated as much as possible; whilst maintaining a clean and straightforward folder structure is a must

## Project requirements

The project uses the [`generator-sizzle`](https://github.com/robertpataki/generator-sizzle) Yeoman generator as a scaffolding tool, and it uses the Grunt Jekyll module to generate the static HTML pages. There is a very sweet mixture of NPM and Ruby here :)

To be able to run the project you will need to have

[`npm`](http://nodejs.org/download/), [`grunt-cli`](http://gruntjs.com/getting-started), [`bower`](http://bower.io/); [`ruby`](https://www.ruby-lang.org/en/), and [`bundler`](http://bundler.io/)` installed.

Once you have all the above installed, you can set up the project locally by running:

	$ npm install
	$ bower install
	$ bundle

Once you're all set, you can test the project locally by running:

	$ grunt serve


## Disclaimer

I can't guarantee, that this project actually makes sense, but I will do my best to see how the goals can be achieved and will update the repo accordingly.

Cheers!