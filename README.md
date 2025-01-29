<!-- markdownlint-disable MD024 -->

# API-based Application Development 🎮

情報工学実験Ⅳ - APIに基づくアプリケーション開発のためのリポジトリです。

## Setup with Dev Containers 📦

API-based Application Development の開発環境を Dev Containers で簡単に立ち上げることができます。

### Attention

- 事前に [Docker](https://docs.docker.com/get-docker) と [Visual Studio Code](https://code.visualstudio.com) をインストールしておく必要があります。

### 1. clone git repository

```bash
git clone "https://github.com/dino3616/api-based-application-development" && cd "./api-based-application-development"
```

### 2. launch container

VSCodeの拡張機能 [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) を使用してコンテナを起動してください。

### 3. install dependencies

```bash
bun install
```

### 4. start development server

```bash
bun run dev
```

## Setup locally 🖥️

API-based Application Development の開発環境をローカルで立ち上げる場合は以下の手順に従ってください。

### Attention

- 事前に [proto](https://moonrepo.dev/docs/proto/install) をインストールしておく必要があります。
- [Optional] 事前に [`.devcontainer/devcontainer.json`](./.devcontainer/devcontainer.json#L8C7-L8C112) に記載されている拡張機能をインストールしておくことを推奨します。

### 1. clone git repository

```bash
git clone "https://github.com/dino3616/api-based-application-development" && cd "./api-based-application-development"
```

### 2. install package manager

```bash
proto use
```

### 3. install dependencies

```bash
bun install
```

### 4. start development server

```bash
bun run dev
```
