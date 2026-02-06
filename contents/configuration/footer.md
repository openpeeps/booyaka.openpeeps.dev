---
title: "Footer Configuration"
description: "Configure the footer section of your documentation site."
---

Customize the footer of your Booyaka documentation site by modifying the footer configuration in your `booyaka.config.yaml` (or `booyaka.config.json`) file. The footer can include links, copyright information, and other relevant details.


## Footer Configuration Example
To configure the footer, add the following section to your configuration file:

```yaml
footer:
  # Enable or disable the footer
  enabled: true
  # Footer content can include text, links, and HTML
  navigation:
    - text: "Privacy Policy"
      link: "/privacy-policy"
    - text: "Terms of Service"
      link: "/terms-of-service"
  copyright: "© 2024 Your Company Name. All rights reserved."
```

**Restart your Booyaka server or rebuild your static site** to see the changes reflected in the footer section of your documentation site.

<div class="alert alert-info rounded-4" role="alert">
  <div class="alert-content">
    Please note that the Booyaka branding and copyright notice must remain in the footer of your documentation site unless you have a commercial license.
    <strong>Commercial licenses will be available soon. Stay tuned!</strong>
  </div>
</div>