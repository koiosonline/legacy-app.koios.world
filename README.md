[![Production deploy](https://github.com/koiosonline/app.koios.world/actions/workflows/production.yml/badge.svg)](https://github.com/koiosonline/app.koios.world/actions/workflows/production.yml)

[![Development deploy](https://github.com/koiosonline/app.koios.world/actions/workflows/develop.yml/badge.svg)](https://github.com/koiosonline/app.koios.world/actions/workflows/develop.yml)

# Koios Worlds App

This repository contains the code used for the Koios Worlds App. The app is available here: https://app.koios.world/.

## Getting started

If you want to contribute to the code or test it locally you need to run `npm install` to install the dependencies. Since the project is bootstrapped by Create React App you can then run `npm start` to run the app in development mode.

## Migrating legacy 3box to IDX profile

If everything goes well 3ID-connect should handle this automatically. It can however happen that a profile is not migrated correctly when using the 3ID-Connect in Koios. If this is the case just press 'Edit profile', this should take you to clay.self.id which will migrate your profile if it hasn't already happened and also makes it possible to change profile data.