# Vodon Player

This repository is home to the Vodon Player, the next evolution of [Vodon Pro](https://github.com/Rodeoclash/vodon-pro). Unlike Vodon Pro, the Vodon Player is designed to be run from a regular website and does not require the use of Electron or to be installed locally on a computer.

You can view in progress builds of Vodon Player at: https://vodon-player.vercel.app/ (however, keep in mind that it's still very early in the development cycle)

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

## Future features

While the Vodon Player is open source, it is intended to be backed by a closed source service called Vodon Cloud. Vodon Cloud will automatically back up the local state of the app and save the videos used in the review into remote storage. This will make it easier to share reviews with others as they will be able to visit a URL and automatically download the review plus stream the videos used in it (and automatically download the videos to their local machine)

## Todo:

1. Add multiple videos at once
2. Drag and drop to add video (including multiple)
3. Notes on videos (should us a rich text system)
4. Drawing on videos (should be assigned to notes first)
5. Fullscreen
6. Switch player POV via number keys
7. Skip forward / back n number of seconds using w, s
8. Settings page to configure things like skip distance
9. Roster / players assignable to videos
