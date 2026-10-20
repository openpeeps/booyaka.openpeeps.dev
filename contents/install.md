---
title: "Install Booyaka"
description: "Instructions to install Booyaka Command Line Interface on your system."
---

## Use Nimble (Recommended)
The recommended way to install Booyaka is via `nimble`, the package manager for Nim. First, ensure you have Nim installed on your system. You can find installation instructions on the [Nim website](https://nim-lang.org/install.html). 

Once you have Nim set up, run the following command to install Booyaka:
```bash
nimble install booyaka
```

## Download Precompiled Binaries
You can use precompiled binaries from the [Booyaka Releases page](https://github.com/openpeeps/booyaka/releases). Choose the appropriate binary for your OS (Linux, macOS, or Windows), download it, and place it in a directory included in your system's PATH.

<div class="alert alert-info rounded-4" role="alert">
  <div class="alert-content">The precompiled binaries are safe to use and have been built from the official source code via GitHub Actions.</div>
</div>

_Ensure that you have the necessary permissions to execute the downloaded binary. You may need to adjust the file permissions using <code>chmod +x booyaka</code> on Unix-based systems._


## Running Booyaka
Once you have [Booyaka installed](/introduction), you can quickly generate a new documentation website via the command line interface.

```bash
booyaka new my_docs_site
```

Navigate to the newly created directory:
```bash
booyaka start --port:8000 --sync
```


Get a list of all available commands and options by running:
```bash
$ booyaka -h
```

```text
A fast documentation generator for cool kids!
  (c) George Lemon | AGPL-3.0-or-later License  
  Build Version: 0.2.0

  new <project:path>           Create a new Booyaka project in the specified directory
          --json:bool
  theme <name:string>          Create a new blank Booyaka theme in ./<name>
  start <project:path>         Init the app with the given installation path
             --sync:bool
             --port:port
          --devMode:bool
  build <project:path>         Generate static HTML website
``` 