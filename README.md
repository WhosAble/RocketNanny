![RocketNanny Logo](https://cloud.githubusercontent.com/assets/1529103/14503871/327e377e-016f-11e6-915b-e015aeaa5184.png)
[![Circle CI](https://circleci.com/gh/RocketNanny/API.svg?style=svg)](https://circleci.com/gh/RocketNanny/RocketNanny)

# RocketNanny

To start your Phoenix app:

  * Copy config/dev.sample.exs into config/dev.secret.exs and configure for your machine
  * Copy config/test.sample.exs into config/test.secret.exs and configure for your machine
  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `npm install`
  * Start Phoenix endpoint with `iex -S mix phoenix.server`

Now you can visit [`localhost:4002`](http://localhost:4002) from your browser.

## Architecture Overview

### RocketNanny

This repository represents the front-end web app for the rocketnanny.com site.

It is compiled by [`Brunch`](http://brunch.io/).

The main front-end framework is a [`React`](https://facebook.github.io/react/) javascript.

To lookup all javascript dependencies open the [`package.json file`](https://github.com/RocketNanny/RocketNanny/blob/master/package.json).

RocketNanny uses [`lodash`](https://lodash.com/docs) for javascript helper methods and [`SASS`](http://sass-lang.com/) for css helper methods.

### RocketNanny API

The front-end of this site relies on the rocketnanny api to do all the heavy lifting. It is where the database and backend operations occur.

RocketNanny communicates with the API in 2 ways. Login and Signup are traditional Rest based POST actions. All other calls occur over a secure websocket. Each user account has it's own channel.

[`See RocketNanny API`](https://github.com/RocketNanny/API/blob/master/README.md) for more information on it's architecture.

### RocketNanny Mobile Apps

The RocketNanny site has a mobile version that is currently under construction. These mobile apps would be native iOS and Android apps that utilize their internal contact list and SMS tools.

## Ubuntu install

1) Install Erlang/Elixir
```sh
sudo apt-get update
sudo apt-get install build-essential
sudo apt-get install erlang-asn1 erlang-base erlang-crypto erlang-inets erlang-mnesia erlang-public-key erlang-runtime-tools erlang-solutions erlang-ssl erlang-syntax-tools
wget https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb && sudo dpkg -i erlang-solutions_1.0_all.deb
sudo apt-get install esl-erlang
sudo apt-get install elixir
sudo apt-get install esl-erlang
```
2) Install hex packages
```sh
mix deps.get
mix deps.compile exrm
```
3) Install gems
```sh
curl -sSL https://get.rvm.io | bash -s stable
source /etc/profile.d/rvm.sh
rvm install ruby-2.3
gem install bundler
bundle install
```
4) Install npm packages
```sh
sudo apt-get install npm
npm install -g npm@3.5.2
npm install
sudo node_modules/brunch/bin/brunch build --production
```


## DigitalOcean Elixir Starter install
1)Upgrade elixir packages
``` sh
sudo apt-get upgrade elixir
sudo apt-get install erlang-asn1 erlang-base erlang-crypto erlang-inets erlang-mnesia erlang-public-key erlang-runtime-tools erlang-solutions erlang-ssl erlang-syntax-tools erlang-dev
sudo apt-get update
sudo apt-get install erlang
sugo apt-get install git
```
2) Install gems
```sh
curl -sSL https://get.rvm.io | bash -s stable
source /etc/profile.d/rvm.sh
rvm install ruby-2.3
gem install sass
bundle install
```
3) Upgrade npm and node
``` sh
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
sudo ln -sf /usr/local/n/versions/node/<VERSION>/bin/node /usr/bin/node 
sudo npm install -g npm
sudo npm install -g npm
```
4) Create database credentials
``` sh
sudo -u postgres psql
```
``` postgres
CREATE USER rocket_nanny WITH PASSWORD 'password';
CREATE DATABASE rocket_nanny;
GRANT ALL PRIVILEGES ON DATABASE rocket_nanny to rocket_nanny;
```
5) Create a release
``` sh
sudo env MIX_ENV=prod mix phoenix.digest
sudo env MIX_ENV=prod mix release
```
