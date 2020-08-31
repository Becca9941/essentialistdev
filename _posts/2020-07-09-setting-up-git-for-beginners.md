---
layout: post
---
### Installing git

I use homebrew to install Git on Mac. To install homebrew, run the following command in the terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

To install git using homebrew:

```bash
brew install git
```

### Configuring Git

You must tell Git your name and email address because there is no central repository to keep track of that information. Git used both to calculate the commit ID - an SHA-1 hash that identifies each commit.

```bash
git config --global user.name "Your Name"
git config --global user.email "user@domain.com"
```

The '--global' flag specifies that this is a config value for every repository you interact with on your machine. If you leave the global command out, you can set these things on a per repo basis.

You can access the congif file by opening the configuration file, found here: ~/.gitconfig file. I use vim to open mine, hense the 'vim' command in the code snippet below.

```bash
vim ~/.gitconfig
```

You can set color.ui to auto if you want your command-line interfaces colorized (color when generating output, plain text when the output is being piped to another process).

```bash
git config --global color.ui auto
```

### Creating a new repository

Create a repository by tying 'git init' in the directory that you want to start tracking files in. The repository you create will be private, and it'll be where you do all your work. It's the repository with the working tree.

```bash
# Make a new repo directory
mkdir repo

# Go inside it
cd repo

# Start tracking files
git init
```

To share the changes you make to a public repository, you'll have to add and commit all of the files you want to make public.

```bash
git add filename.ext
git commit -m "commit message"
```

### Creating a local copy of an existing repository

To create a local copy of an existing repository, you need to clone the repository using the git clone command.

```bash
# Clone a repo
git clone repo-url

# Clone a repo to a specific path
git clone repo-url some-path
```

The git clone command initializes a new repository and fetches the entire history - all the changes that have been tracked during the life of that repository. After it's complete, you can start making changes and tracking the commits locally.

You can use the --depth parameter to limit how many revisions you fetch if you don't want the entire history, if you just want the last years worth of revisions etc. This is known as a *shallow repository.*

```bash
# Shallow clone with last 50 commits
git clone --depth 50 repo-url
```

However, you can't create another clone from a shallow repo, but a shallow repo is useful if you want to submit a patch (a change) to a procject with a long history. You only need the recent changes to show your change against.
