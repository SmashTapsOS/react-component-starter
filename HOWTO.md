# How to use this repo

## Configuring github

- Clone repo - `git clone https://github.com/samAbeywickrama/test-abeywickrama.git`
- Remove existing git repo - `rm -rf .git`
- Initialize new git repo - `git init`
- Push your changes to your git repo
  - `git remote add origin {git repo url here}`
  - `git push -u origin master`

## Configuring Travis CI

This repo uses travis CI with semantic release to automate the release process.

- Copy `.sample-semantic-release.travis.yml` into `travis.yml`
- Run `npx semantic-release-cli setup`. You will see a list of questions.
- Go to Travis https://travis-ci.org/ and signup
- Enable TravisCI for your repository form the Travis CI dashboard.
- Select `Travis CI` as the CI tool and answer the other questions. (You can use any other ci tool as you like)
- Go to https://coveralls.io/ and sign up
- Enable coveralls for your repository from the coveralls dashboard

## Configuring NPM

**note:** Do not change version if you are going to use semantic release

- Open package.json and change following lines
  - name
  - description
  - keywords
  - author
  - bugs.url
  - homepage

## How to release

This repo uses `semantic-release` with `commitizen`. Releases are managed by Travis CI. To use this feature run `yarn commit` to commit your changes to git. once you have pused/merged your changes to master branch it will trigger a travis build.

## Rollup.js

You can find all the rollup related configurations in `rollup.config.js`
