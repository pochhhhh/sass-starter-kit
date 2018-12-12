# sass-starter-kit

Make sure you have Node.js and the following Node packages installed globally and locally to your project before you begin any coding:

* gulp
* gulp-sass
* node-sass
* browser-sync

Commands:

npm install gulp
npm install gulp-sass node-sass --save-dev
npm install browser-sync --save-dev

The purpose of this starter kit is to ease the creation of front end mock-ups by cutting down time for mundane tasks such as browser reloading and SASS/CSS compiling. This starter kit has a HTML markup layout and SASS file structure that resembles the Underscores WordPress starter theme, which has a very organised way of separating various styling components, such as variables and mix-ins. The idea is to guide the developer into coding front end markup and styling that adheres to best coding practices for WordPress theme development. This starter also has Bootstrap incorporated so when modifying SASS files, be sure to keep in mind to use !important in your SASS files where necessary to override the default Bootstrap styling declarations.

******************************************************************************************

Do not ever touch the style.css file or style.scss file unless you're declaring an import. Modify the specific scss file directly instead, such as _elements.scss instead. The generic style.css and style.scss is only used to import from other more specified styling files.

******************************************************************************************
