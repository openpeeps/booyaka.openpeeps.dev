---
title: "Versioning"
description: "Manage multiple versions of your Booyaka documentation site effectively."
---

Enable documentation versioning in Booyaka to maintain and serve multiple versions of your documentation site simultaneously. This is particularly useful for projects that have different releases or versions that require separate documentation.

<div class="alert alert-info rounded-4" role="alert">
  <div class="alert-content">
    Booyaka is using Git tags to manage documentation versions. Ensure that your project repository uses Git and that you create tags for each version of your documentation.
  </div>
</div>

## Enabling Versioning in Configuration
To enable versioning, add the following configuration to your `booyaka.config.yaml` (or `booyaka.config.json`) file:

```yaml
git:
  # By enabling versioning, Booyaka will use Git tags
  # to manage different versions of your documentation.
  #
  # A dropdown will be added to the navigation bar
  # allowing users to switch between versions.
  enable_versioning: true
```

**Restart your Booyaka server or rebuild your static site.**

## Git tagging
To create a Git tag for a specific version of your documentation, use the following command:
```bash
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0
```

## Default branch
By default, Booyaka will use the `main`/`master` branch as the working version of your documentation. 