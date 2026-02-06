---
title: "Search Settings"
description: "Configure search settings for your Booyaka documentation site."
---

Booyaka provides a built-in search functionality that allows users to quickly find
content within your documentation site. You can configure the search settings in the `booyaka.config.yaml` file.

## Enabling Search
To enable the search feature, ensure that the `search` setting is set to `true` in your configuration file.


## Search data indexing
Booyaka automatically indexes your documentation content to create a search database.

This indexing process occurs during the site build, ensuring that all searchable content
is up-to-date. The indexed data includes **page titles**, **page subtitles**, and **meta tags**, allowing for efficient search results.

## Configuration Example
To configure the search settings, add the following section to your `booyaka.config.yaml` file:

```yaml
header:
  # The search component settings
  search:
    # Enable or disable the search functionality
    enable: true

    # Enable indexing of meta descriptions (title, description, keywords)
    index_meta_data: true
    
    # Enable indexing of page titles (all headings)
    index_page_titles: true
```

### Use a different Search Provider
At the moment, Booyaka only supports its built-in search functionality. We plan to add support for
third-party search providers in future releases. Stay tuned for updates!