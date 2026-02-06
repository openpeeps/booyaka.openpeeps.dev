---
title: "Main Menu"
description: "Configure the topbar navigation structure for your documentation site."
--- 

Define the structure and content of the top navigation bar in your Booyaka-generated documentation site. This navigation bar is useful for providing quick access to **important sections of your documentation**, **external links**, or **other resources**.

**Adding a navigation menu is easy!** You can specify the menu items in your configuration file using the following format 👇
```yaml
menu:
  - title: "Documentation"
    url: "/"

  - title: "API Reference"
    url: "/api"

  - title: "Blog"
    url: "https://example.com"

  - title: "Check GitHub"
    url: "https://github.com/openpeeps/booyaka"
```
