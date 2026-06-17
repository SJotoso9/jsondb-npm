# [JsonDB](https://www.npmjs.com/package/@sjotoso9/jsondb)

## v1.0.3-beta2

Create database with simple JSON files!

Use import to use in your project

# Q/A

## Q: How do i use?
<br />

A: First import the functions using

import * as jsondb from "@sjotoso9/jsondb"

after on the start of your project place

const db = new jsondb(NAME OF YOUR JSON FILE FOLLOWED BY A DOT AND SLASH)
Example: './db.json'

this now will create the db file inside your project's folder

Use db.put(data) to place data inside

Use db.load() to load data inside

Use db.edit(idx, data) to replace the data on the index provided

Use db.delete(idx) to delete all data inside the index provided

## Q: How many functions are inside?
<br />
A: on version 1.0.3 there are just 4 methods inside the class (there are some bugs on some of then)

METHODS: put(), edit(), load(), delete()

## Q: By what this was made?
<br />
A: this was made for people that doesn't want to setup more advanced databases or for people that is a beginner on javascript

# Contributing to the project

## Forking
Fork the entire repository on github, go to the branch **develop**
And make any changes you want

## Pull Requests

after go to the official repository on github and do a pull request

## **RULES:**
 NEVER MAKE ANY CHANGES ON THE **MAIN** BRANCH OR DO A PULL REQUEST ON THE **MAIN** BRANCH

DON'T TROLL
DON'T DO A **VIRUS**

## **ALPHA/BETA TESTING VERSIONS**

any betas or alphas you make include on the pull request as [TYPE]

## Example:

`[ALPHA UPDATE] The Nothing Update`

# Made by:

Josué Ronaldo

I'm 13 old im starting on javascript and made this module for other beginners too

used ***vim*** and ***node:fs*** to build
