---
title: "Content Authors"
description: "Shows how to manage and display authors in Booyaka documentation."
---

To enable and display authors (e.g., "edited by x, z, y") in your Booyaka documentation, you need to version your docs with Git. Booyaka can extract contributor information from your Git history and show who edited each page.

## Show Authors in Configuration
```yaml
content:
  show_authors: true
```

With the `show_authors` option set to `true`, Booyaka will automatically retrieve and display the list of authors for each markdown file based on the Git commit history (chronologically). **Make sure your documentation files are tracked in a Git repository for this feature to work correctly.**

When you enable the authors feature, Booyaka will display the authors at the bottom of each documentation page, providing transparency about who contributed to the content. This is especially useful for collaborative documentation projects where multiple contributors are involved.

