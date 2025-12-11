---
title: "SEO Settings"
description: "Configure SEO settings for your Booyaka documentation site."
---

Booyaka allows you to configure SEO (Search Engine Optimization) settings for your documentation site through the `booyaka.config.yaml` file. Proper SEO settings can help improve the visibility of your documentation in search engine results.

## Global SEO via Config
```
metadata:
  url: "https://booyaka.openpeeps.dev/docs"
  title: "Booyaka &mdash; Documentation Site Generator for Cool kids!"
  description: "Booyaka is a powerful documentation site generator built with the Nim programming language. It helps you create beautiful, fast, and easy-to-navigate documentation for your projects."
  keywords:
    - "documentation generator"
    - "booyaka"
    - "supranim"
    - "nim lang"
    - "documentation"
```

## Open-Graph Settings
You can also configure Open-Graph settings to enhance the appearance of your documentation pages when shared on social media platforms. Use the following fields in the YAML front matter of your content pages:
```yaml
---
open_graph:
  title: "Open-Graph Title"
  description: "Open-Graph description for social media sharing."
---
```

<div class="alert alert-info rounded-4">
  <div class="alert-content">
    Enable the Open-Graph image generator in the <strong>booyaka.config.yaml</strong> file to automatically create Open-Graph images for your documentation pages. 👇
  </div>
</div>

## Open-Graph Image Generator
Booyaka supports automatic generation of Open-Graph images for your documentation pages. You can configure the Open-Graph image settings in the `booyaka.config.yaml` file:

```yaml
open_graph:
  enabled: true
  template: "path/to/og-template.png"  # Path to your custom OG image template
  output_dir: "path/to/output/og-images"  # Directory to save generated OG images
```

