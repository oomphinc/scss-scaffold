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

## Run Lint
We use the Brigade Linter gem: <https://github.com/brigade/scss-lint>

Install: `gem install scss_lint`

Run `scss-lint` from the command line by passing in a directory (or multiple directories) to recursively scan:

`scss-lint ~/path/to/oomph-scaffold/` from the root of this scaffold. 

# Now go make something cool