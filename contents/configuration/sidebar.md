---
title: "Sidebar navigation"
description: "Configure the sidebar navigation structure for your documentation site."
---

The sidebar navigation in your documentation site can be customized to improve user experience and make it easier for visitors to find the information they need. You can configure the sidebar by editing the `sidebar` section in your configuration file.

```yaml
sidebar:
  # First section
  - title: "Getting Started"
    items:
      - title: "Introduction"
        url: "/getting-started/introduction"
      - title: "Installation"
        url: "/getting-started/installation"
  
  # Another section
  - title: "Guides"
    items:
      - title: "Customization"
        url: "/guides/customization"
      - title: "Deployment"
        url: "/guides/deployment"
  
  # Add more sections as needed
  - title: "API Reference"
    items:
      - title: "Endpoints"
        url: "/api/endpoints"
      - title: "Authentication"
        url: "/api/authentication"
```