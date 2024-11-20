# Chady

A minimalist and user-friendly platform inspired by [LeetCode](https://leetcode.com/) and [TypeHero](https://typehero.dev/), designed to help developers enhance their skills through programming challenges. Users can submit solutions, earn points, and track their progress.


## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
   - [Prerequisites](#prerequisites)
   - [Steps to Set Up](#steps-to-set-up)
3. [Run the Development Environment](#run-the-development-environment)
4. [Notes](#notes)


## Features

- **Dynamic Challenge Management**: Explore a wide range of programming challenges.
- **Online Code Execution**: Test code directly in the browser with support for multiple languages (Javascript and Python).
- **Point System**: Earn points for solving challenges and climb the leaderboard.
- **GraphQL API**: Efficient communication between the frontend and backend for seamless interactions.
- **Discord Integration**: Login and participation require users to belong to a specific Discord server, ensuring a controlled user base.

> **Note**: The login process validates that users are members of the specified Discord server.


## Installation

This repository is organized as a monorepo using [TurboRepo](https://turbo.build/) and [pnpm](https://pnpm.io/). It includes the following applications:

- **API**: A NestJS server with GraphQL for managing challenges, user data, and authentication.
- **Runner**: A Rust-based online code compiler.
- **Challenger**: A frontend application built with Next.js for interacting with the platform.


### Prerequisites

Ensure the following tools are installed on your system:
- [Node.js](https://nodejs.org/) (v16+)
- [Rust](https://www.rust-lang.org/tools/install)
- [pnpm](https://pnpm.io/installation)
- [PostgreSQL](https://www.postgresql.org/download/) (for the API database)
- [Docker](https://www.docker.com/) (optional, for running services like the database)


### Steps to Set Up

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Chads-Programming/chady
   cd chady
   ```
2. Install dependencies: Use pnpm to install dependencies for all apps in the monorepo:
   ```bash
   pnpm install
   ```
3. Environment variables:
  * API: The apps/api directory includes a .env.example file with the required environment variables:

  ```text
  PORT=3200
  DATABASE_URL="postgresql://dev_user:dev_password@localhost:2020/chady_db?schema=public"
  DISCORD_CLIENT_ID=""
  DISCORD_CALLBACK_URL="http://localhost:3200/auth/discord/redirect"
  DISCORD_CLIENT_SECRET=""
  AUTH_REDIRECT_URL="http://localhost:3000"
  MEMBER_NOT_FOUND_REDIRECT_URL="http://localhost:3000/auth/member-not-found"

  COOKIE_SECRET=""
  DISCORD_SERVER_ID=""
  DISCORD_API_KEY=""
  CODE_RUNNER_API_HOST="http://localhost:8000"

  ALLOWED_ORIGIN_HOSTS="http://localhost:3000,https://studio.apollographql.com"

  JWT_ACCESS_SECRET=""
  JWT_ACCESS_EXPIRATION=""

  JWT_REFRESH_SECRET=""
  JWT_REFRESH_EXPIRATION=""
  ```

  * Challenger: The apps/challenger directory includes a .env.example file for the frontend application:

  ```text
  NEXT_PUBLIC_API_HOST="http://localhost:3200"
  NEXT_PUBLIC_HOST="http://localhost:3000"
  ```
4. Set up the database:
Run `docker compose` to use a db container:

```bash
docker compose up -d
```
Load prisma schemas for first time

```bash
pnpm db:push --filter=api
```


## Run the Development Environment

TurboRepo is configured to start all applications simultaneously:
```bash
pnpm dev
```

This will:

* Start the API on `http://localhost:3200`.
* Start the Runner service (internal use).
* Start the Challenger frontend on `http://localhost:3000`.

To ensure GraphQL types are always up-to-date in the Challenger, start the watcher:

```bash
pnpm gql:gen
```

## Notes

- The `pnpm gql:gen` command runs in watch mode, so it should be active during development for proper type generation.
- The `pnpm dev` command automatically starts all apps defined in the monorepo.
