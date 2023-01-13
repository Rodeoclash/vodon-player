# Vodon Player

This repository is home to the Vodon Player, the next evolution of [Vodon Pro](https://github.com/Rodeoclash/vodon-pro). Unlike Vodon Pro, the Vodon Player is designed to be run from a regular website and does not require the use of Electron or to be installed locally on a computer.

## How it works

Functionally, the Vodon Player is quite similar to Vodon Pro but with a few exceptions. Instead of playing video files directly on your machine, video files are copied to the OPFS (Origin Private File System) and played from that. This means that once a video file has been loaded, the original file can be moved or deleted without affecting any gameplay analysis that might be in progress. Gameplay analysis is stored entirely on the users machine with a combination of the OPFS for file storage and LocalStorage to maintain the apps state.

## Development

To work on the app, simply clone the repo then (assuming `docker-compose` is present in your `$PATH` and `make` is installed) run:

```bash
make install
```

Which will build and install all required dependencies.

The app can be started with:

```bash
docker-compose up
```

Then you can connect to it at `http://localhost:3000`
