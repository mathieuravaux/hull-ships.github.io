# Hull Ships Gallery Utility

This repository contains the list of Ships shown in the Ships Gallery for Hull.io

*You need to be a member of the Hull Team to use this*

### Updating the gallery

- `git clone https://github.com/hull-ships/hull-ships.github.io.git`
- `cd hull-ships.github.io`
- `git checkout develop`
- `npm install grunt`
- `gulp deploy`

This will fetch all public Ships from `https://github.com/hull-ships/`, write the list in the `registry` folder, and publish back to `master`

