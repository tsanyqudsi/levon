---
name: 'class'
root: './docs/character/classes'
output: '**/*'
ignore: []
questions:
  class: 'Please enter any text.'
---

# `{{ inputs.value }}.toml`
  
```toml
description = "Please describe the class here."
skills = [
  "List the unique skills here.",
  "You can list more than one but less than 3 skills."
]
bonusStats = [
  "List the bonus stats here."
]
```