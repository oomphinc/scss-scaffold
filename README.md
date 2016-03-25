# Oomph's scss-scaffold
====

This is Oomph's boilerplate scaffold for starting front-end theme development in either Drupal or WordPress. 

## Maintenance

All UI team members are expected to help maintain this scaffold and update best practices as we work on other projects. The workflow should be something like this: 

* A team member clones this repo and starts a new project with it
* They notice something that they need to change in the scaffold that is NOT specific for this project, like a default markup pattern has changed, a browser has become unsupported, or an error or omission in a function needs an update
* The team member changes it in their new project, BUT ALSO goes back to the scaffold and Files an Issue in Github and assigns it to themselves. 
* Then can then resolve the Issue by making the change needed and submitting a PR for review, or, they can go back and handle the Issue later. 

In this way, maintenance becomes a team effort and no one person is burdened with all maintenance responsibilities. 

Likewise, if there is a new great idea that we should incorporate into this scaffold, any team member can file an Issue and bring the idea forward for review and inclusion. 

## Add Bourbon and Neat
If you are going to compile and test this Scaffold locally, you will need to add the dependencies Bourbon and Neat:

```
# You already have SASS installed, right? 
$ which sass
# You should see a path to your local SASS copy

# Requires Sass 3.3+
$ sass --v
$ Sass 3.4.20

# If you need the gem installed
$ gem install bourbon
$ gem install neat

# Then, navigate to the directory to install Boubon into
$ cd /scaffold/libraries
$ bourbon install
$ neat install
```

## Compile manually
While working on the Scaffold, compile your CSS and test the output by running it in this folder. Here's the command: 

```
$ sass --watch styles.scss:output.css --style compressed
```

## Run Lint
We use the Brigade Linter gem: <https://github.com/brigade/scss-lint>

Install: `gem install scss_lint`

Run `scss-lint` from the command line by passing in a directory (or multiple directories) to recursively scan:

```
# from the root of your system, set the path to this Scaffold
$ scss-lint ~/path/to/scaffold/ 
```

# Now go make something cool