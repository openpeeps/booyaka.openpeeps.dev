---
title: "Share Buttons"
description: "Configure share buttons for your Booyaka documentation site."
---

Enable share buttons in your Booyaka documentation site to allow users to easily share content
via various AI platforms and copy content in different formats. You can configure the share
buttons in the `booyaka.config.yaml` file.

It is recommended to keep the **Copy Text** and **Copy Markdown** buttons at the top of the share buttons list for better user experience.

```yaml
share_ai_buttons: true

# Add custom AI providers or actions to the share buttons
share_buttons_providers:

  - label: "Copy text"
    description: "Copy multi-line text for LLMs"
    onClick: "UI.content.copyText()"

  - label: "Copy Markdown"
    description: "Copy page content as Markdown"
    onClick: "UI.content.copyMarkdown()"

  - separator: true

  - label: "ChatGPT"
    description: "Opens ChatGPT with page content"
    url: "https://chatgpt.com/"

  - label: "Claude"
    description: "Opens Claude AI with page content"
    url: "https://claude.ai/"

  - label: "DeepSeek"
    description: "Opens DeepSeek with page content"
    url: "https://deepseek.ai/"

  - label: "DuckAI"
    description: "Ask AI privately with DuckDuckGo"
    url: "https://duckai.ai/"

  - separator: true

  - label: "Copy link"
    description: "Copy page link to clipboard"
    onClick: "UI.content.copyLink()"
```