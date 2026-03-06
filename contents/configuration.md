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
  url: "https://example.com" # The base URL of the documentation site
  title: "" # The title of the site
  description: "" # A short description of the site for SEO purposes
  keywords: # A list of keywords for SEO purposes
    - "docs"
    - "booyaka"

appearance:
  show_theme_switcher: true           # Show theme switcher in the header
  defaullt_theme: "system"            # Default theme ("light", "dark", "system")
  show_toggle_left_sidebar: true      # Show toggle button for left sidebar
  show_toggle_right_sidebar: false    # Show toggle button for right sidebar
  container_width: "col-lg-10 mx-auto" # Bootstrap container width class
  content_width: "col-lg-7" # Bootstrap column width class for content
  background_noise_opacity: 0.03 # Opacity of background noise texture

git:
  enable_versioning: false # Enable versioning based on Git tags/branches
  enable_contributors_info: false # Show contributors info from Git history

header:
  search:
    enable: true # Enable search in header
    index_meta_data: true # Index metadata for search
    index_page_titles: true # Index page titles for search

content:
  allowedRawHtmlTags: # Allowed raw HTML tags in Markdown content
    - "b"
    - "i"
    - "strong"
    - "em"
    - "a"
    - "p"
    - "ul"
    - "ol"
    - "li"

  showLastUpdated: true # Show "Last Updated" timestamp
  lastDateUpdatedFormat: "yyyy-MM-dd HH:mm:ss" # Format for "Last Updated"
  enableAutoFormatLinks: true # Auto-format URLs as clickable links
  bottom_navigation: true # Enable bottom navigation links
  codeHighlightTheme: "default" # Code syntax highlighting theme
  share_ai_buttons: true # Show AI share buttons in page header
  share_buttons_ai_providers: # List of AI providers for share buttons
    - label: "ChatGPT"
      url: "https://chat.openai.com/share?text={content}"
      description: "Share with ChatGPT"
    - label: "Claude"
      url: "https://claude.ai/share?text={content}"
      description: "Share with Claude"

navbar: # Top navigation bar configuration
  - title: "Home"
    url: "/"
    icon: "" # Optional icon (Tabler Icons)
  - title: "Docs"
    url: "/docs"
    icon: "icon-book"

sidebar_navigation: # Sidebar navigation configuration
  - name: "Getting Started"
    items:
      - title: "Introduction"
        url: "/docs/intro"
        icon: ""
      - title: "Installation"
        url: "/docs/install"
        icon: "icon-download"
  - name: "Guides"
    items:
      - title: "Usage"
        url: "/docs/usage"
        icon: ""

sidebarLeftType: "default" # Type of the left sidebar
sidebarRightType: "default" # Type of the right sidebar

extra_sections:
  left_sidebar: # Extra sections for the left sidebar
    - title: "" # Optional title
      content: "" # Optional content (HTML/Markdown)
  right_sidebar: # Extra sections for the right sidebar
    - title: ""
      content: ""

footer:
  text: "" # Footer text content
  links: # Footer links configuration
    - title: "GitHub"
      url: "https://github.com/example"
      icon: "icon-brand-github"
```

## Modifying the Configuration
To modify the configuration, simply edit the `booyaka.config.yaml` file and update the desired fields. **After making changes, restart your Booyaka server to see the updates reflected in your documentation site.**