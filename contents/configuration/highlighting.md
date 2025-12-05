---
title: "Code Highlighting"
description: "Configure code highlighting settings for your Booyaka documentation site."
---

Booyaka uses [Highlight.js](https://highlightjs.org/) to provide syntax highlighting for code blocks in your documentation. You can customize the appearance of code blocks by selecting different themes and configuring settings in the `booyaka.config.yaml` file.

## Highlight.js Theme
You can choose from a variety of Highlight.js themes to change the look and feel of your code blocks. To set a custom theme, update the `booyaka.config.yaml` file with the desired theme URL. For example, to use the "CodePen Embed" theme, add the following line to your configuration:

```yaml
code_highlighting:
  theme_url: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/codepen-embed.min.css"
```