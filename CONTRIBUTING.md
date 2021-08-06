# Contributing

We are very happy to accept contributions to improve this Backlight starter-kit, whether those are bugfixes, new features/components, or anything else you think will be an improvement.

To help, we suggest the following forking workflow.

## Using Backlight.dev

TODO: Add info on how to contribute by forking & creating PR from Backlight.dev

## Using your local environment

### Clone and run

```sh
# Clone the repo:
git clone https://github.com/divriots/starter-simba.git
cd lion

# Install dependencies
npm i

# Create a branch for your changes
git checkout -b fix/buttonSize

# Serve through local backlight-cli
npm run serve
```

### Fork

At <https://github.com/divriots/starter-simba> click on fork (at the top-right)

```sh
# add fork to your remotes
git remote add fork https://github.com/<your-user>/starter-simba.git

# push new branch to your fork
git push -u fork fix/buttonSize
```

Now you can go to your fork on Github and create a Pull Request from your fork to the origin repository, from your branch to main.

> Contrary to many tutorials on how to contribute to open-source and how to fork, we believe it is much simpler to clone the origin repository, create branches from the `origin`, and push them to your fork. This helps keep origin in sync more easily by just doing `git pull` everytime you create a new fork branch.
