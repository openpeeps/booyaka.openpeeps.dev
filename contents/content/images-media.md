---
title: "Images & Media"
description: "Guidelines for managing images and media in your Booyaka documentation site."
---
Booyaka allows you to easily manage images and media files within your documentation site.

## Create a dedicated media folder
It's a good practice to create a dedicated folder for your images and media files within your documentation project. For example, you can create a folder named `upload` or `images` inside `<your-docs-root>/media/` to store all your media assets.

## Referencing images in your content
You can reference images in your Markdown files using relative paths. For example, if you have an image named `example.png` in the `/media/upload/` folder, you can include it in your Markdown content like this:

```markdown
![Alt text for the image](/media/upload/example.png)
```

