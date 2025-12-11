---
title: "SEO Content"
description: "Guidelines for optimizing SEO settings in your Booyaka documentation site."
---

Use YAML front matter to set SEO metadata for each documentation page. Proper SEO metadata helps search engines understand the content of your pages, improving their visibility in search results.

```yaml
---
title: "Page Title"
description: "A brief description of the page content."
keywords:
  - "keyword1"
  - "keyword2"
  - "keyword3"
---
```

If not provided in the front matter, Booyaka will fall back to global SEO settings defined in the `booyaka.config.yaml` file. Check the [SEO Settings](/configuration/seo-settings) documentation for more details on configuring global SEO settings and Open-Graph options.