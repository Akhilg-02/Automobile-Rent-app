#!/bin/bash

# Add all changes to the staging area
git add --all

git status

# Commit changes with a specified message
git commit -m "udated the dashbord design,navigation"

# Push changes to the remote repository
git push origin main
