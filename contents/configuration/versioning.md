---
title: "Versioning"
description: "Manage multiple versions of your Booyaka documentation site using Git tags."
---

Enable documentation versioning in Booyaka to maintain and serve multiple versions of your documentation site simultaneously. This is particularly useful for projects that have different releases or versions that require separate documentation.

<div class="alert alert-info rounded-4" role="alert">
  <div class="alert-content">
    Booyaka uses <strong>Git tags</strong> to manage documentation versions. Ensure that your project repository uses Git and that you create <strong>semantic version</strong> tags (e.g. <code>v1.0.0</code>) for each version of your documentation.
  </div>
</div>

## Enabling Versioning
To enable versioning, add the following configuration to your `booyaka.config.yaml` (or `booyaka.config.json`) file:

```yaml
git:
  # By enabling versioning, Booyaka will use Git tags
  # to manage different versions of your documentation.
  #
  # A dropdown will be added to the navigation bar
  # allowing users to switch between versions.
  enable_versioning: true

  # The label of the root version (the current working tree /
  # default branch) shown in the version switcher.
  latest_label: "main"
```

**Restart your Booyaka server or rebuild your static site.**

## How it works
When versioning is enabled, Booyaka scans the Git tags of your project repository and keeps only the tags that parse as a **semantic version** (e.g. `v1.0.0`, `1.2.3`). Non-semver tags are ignored.

The **current working tree** (your `main`/`master` branch) is always served at the root path `/`. Each detected tag is served under a versioned subpath:

| Path | Content |
|---|---|
| `/` | The current working tree / default branch (`latest_label`) |
| `/v1.0.0` | The documentation as it existed at tag `v1.0.0` |
| `/v2.0.0` | The documentation as it existed at tag `v2.0.0` |

A **version switcher dropdown** appears in the navigation bar, letting visitors jump between versions. When the same page exists in another version, the dropdown links directly to that page (e.g. `/v1.0.0/installation`); otherwise it links to the version index.

## Git tagging
To create a Git tag for a specific version of your documentation, use the following command:
```bash
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0
```

Only **semver-compatible** tags are treated as documentation versions. Tags such as `v1.0.0`, `v1.0.0-beta.1`, or `2.1.0` are supported; tags like `latest` or `release-2024` are ignored.

## Building versioned static sites
The `build` command generates the full static site for every version:

```
booyaka build .
```

The output layout mirrors the URL structure:

```
_build/
  index.html            # root version (main / current working tree)
  installation/
  ...
  v1.0.0/
    index.html          # tag v1.0.0
    installation/
  v2.0.0/
    index.html          # tag v2.0.0
    installation/
```

## Notes
- Versioned content is extracted read-only from each tag using `git archive`, so your working tree is never modified.
- Extracted snapshots are cached under `.cache/versions/` in your project directory.
- The configuration is shared across versions: all versions use the `booyaka.config.yaml` from the current working tree, only the Markdown content is taken from each tag.
- The built-in search index is generated for the root version.
