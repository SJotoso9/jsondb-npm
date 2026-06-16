# JsonDB

Create database with simple JSON files!

Use import to use in your project

# Q/A

# Q: How do i use?

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

# Q: How many functions are inside?

A: on version 1.0.3 there are just 4 methods inside the class (there are some bugs on some of then)

METHODS: put(), edit(), load(), delete()

# Q: By what this was made?

A: this was made for people that doesn't want to setup more advanced databases or for people that is a beginner on javascript

# Made by:

Josué Ronaldo

I'm 13 old im starting on javascript and made this module for other beginners too

used vim and node:fs to this
