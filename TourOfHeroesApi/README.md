# Tour of Heroes API

The API that all the demo projects use. It is a simple CRUD-application for managing hero entities.

The relevant endpoints are the following:

- GET /api/heroes
- POST /api/heroes
- PUT /api/heroes
- GET /api/heroes/:id
- DELETE /api/heroes/:id

## Setup

### Using Go directly

- Requirements: Install and setup Go (see [Go's documentation](https://go.dev/doc/install))
- Start server with `go run .`

### Using prebuild binaries

- MacOS / Linux: `./tour-of-heroes-api` (only tested on Pop_OS)
- Windows: `tour-of-heroes.exe` (not tested)
