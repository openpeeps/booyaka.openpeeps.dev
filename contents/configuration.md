---
title: Booyaka Configuration
description: "Learn how to configure & customize your Booyaka instance"
---

Booyaka offers a flexible configuration system that allows you to customize various
aspects of your documentation site. You can use either a **YAML** or **JSON** configuration
file to define settings such as **site metadata**, **appearance**, **navigation**, and more. 

If you haven't set up a **Booyaka project** yet, you can create one by running the following command in your terminal 👇
```
booyaka new project-name
```

This command will generate a new Booyaka project with the necessary folder structure
and default configuration files (pass `--json` flag to create a JSON configuration file instead of YAML).

Once generated, you will find the configuration file named `booyaka.config.yaml` or `booyaka.config.json` in the root of your project directory.


Here is an overview of the main configuration options available in Booyaka:
```yaml
metadata:
  url: string
  title: string
  description: string
  keywords: seq[string]

header:
  enable_search: bool

content:
  show_last_updated: bool
```

## Modifying the Configuration
To modify the configuration, simply edit the `booyaka.config.yaml` file and update the desired fields. **After making changes, restart your Booyaka server to see the updates reflected in your documentation site.**