# material-design

JavaScript & CSS implementation of the Material Design using Web Components

## Developpers

Note: if you do not want to install any development tools on your system, you can use `docker` to create a development environment with the following command:

```console
$ docker run -itu node -w /app -v "$(pwd)":/app node bash
$ git config --user.email "youremail@yourhost.com"
$ git config --user.name "Your NAME"
```

### Installation

Using `git`:

```console
$ cd ~/
$ git clone https://github.com/aminnairi/material-design.git aminnairi/material-design
$ cd ~/aminnairi/material-design
```

### Node Modules Installation

```console
~/aminnairi/material-design $ npm install
```

### Transpile files

```console
~/aminnairi/material-design $ npm start
```

### Build the production files

```console
~/aminnairi/material-design $ npm run build
```

Files that are meant to be deployed on your application are located under the `~/aminnairi/material-design/dist` folder.