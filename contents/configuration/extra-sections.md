---
title: "Extra Sections"
description: "Configure extra sections for your Booyaka documentation site."
---

Booyaka allows you to add extra sidebar sections to your documentation site through the `booyaka.config.yaml` file. These extra sections can be used to display additional information, links, or any custom content you want to include in the sidebar.

Here's how you can add an extra section to the right sidebar, similar to "**Hetzner Cloud Credits**" seen here on Booyaka's documentation site 👉

```yaml
extra_sections:
  right_sidebar:
    - content: |
        <div class="card border-2 rounded-4 me-3" style="border-style: dotted;">
          <div class="card-body small p-5 lh-sm user-select-none">
            <img class="img-fluid" src="https://www.hetzner.com/_resources/themes/hetzner/images/logo/hetzner-logo.svg?m=1764328696" width="100%" alt="Hetzner Logo">
            <p class="mt-3">
              Get € 20.00 free credit on Hetzner Cloud with our link!<br>
            </p>
            <a href="https://hetzner.cloud/?ref=Hm0mYGM9NxZ4" class="btn btn-sm py-1 rounded-pill bg-dark d-inline-block" target="_blank">Sign up to Hetzner Cloud</a>
          </div>
        </div>