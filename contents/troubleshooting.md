---
title: "Troubleshooting"
description: "Common issues and their solutions when using Booyaka"
---

### Out of memory error
Updating your Booyaka from an older version to a newer one may cause an
```
out of memory
```

error when running on a previously built project. This is because the new version may have structure changes that are not compatible with your `booyaka.db` or `booyaka.search.db` files.

To fix this, manually delete these files from your project directory and run Booyaka again. Booyaka will regenerate these files with the new structure, resolving the out of memory error.

