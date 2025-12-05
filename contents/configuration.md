---
title: Booyaka Configuration
description: "Learn how to configure & customize your Booyaka instance"
---

Booyaka offers a flexible configuration system that allows you to customize various aspects of your documentation site. 
You can use either a YAML or JSON configuration file to define settings such as site metadata, appearance, navigation, and more. 

If you haven't set up a Booyaka project yet, you can create one by running the following command in your terminal
```
booyaka new project-name
```

This command will generate a new Booyaka project with the necessary folder structure and default configuration files. 
Pass `--json` flag to create a JSON configuration file instead of YAML. Once generated, you will find the configuration 
file named `booyaka.config.yaml` or `booyaka.config.json` in the root of your project directory.

```yaml
url: string
description: string
keywords: array[string]

navbar:
  - title: "Home"
    url: "/"
  
  - title: "Getting Started"
    url: "/getting-started"

  - title: "Guides"
    url: "/guides"

  - title: "API Reference"
    url: "/api"
  
  - title: "GitHub"
    url: "https://github.com/supranim/supranim"

sidebar_navigation:
  - name: "Getting Started"
    items:
      - title: "Introduction"
        url: "/"
      
      - title: "Installation"
        url: "/installation"
      
      - title: "Quick Start"
        url: "/quick-start"
      
      - title: "Configuration"
        url: "/configuration"

footer:
  # Footer text, usually for copyright information
  text: "&copy; 2025 Supranim Framework. All rights reserved."
  
  # Add social media links in the footer
  social_links:
    - title: "GitHub"
      url: "https://github.com/supranim/supranim"
      
    - title: "Twitter"
      url: "https://twitter.com/supranim"
```


## Modifying the Configuration
To modify the configuration, simply edit the `booyaka.config.yaml` file and update the desired fields. After making changes, restart your Booyaka server to see the updates reflected in your documentation site.