---
title: "Deployment"
description: "Guidelines for deploying Booyaka documentation sites with containerization and reverse proxy configurations."
---

Deploying your Booyaka documentation is straightforward and can be accomplished using various methods.

## Reverse Proxy Configuration
Configure a reverse proxy for your Booyaka documentation site.

Booyaka can be configured to work behind a reverse proxy. This is useful if you want to serve your documentation site from a specific subpath or domain while using a reverse proxy server like Nginx or Apache.


### Nginx Configuration
```
server {
    listen 80;
    server_name docs.example.com;

    location / {
        proxy_pass         http://127.0.0.1:8080;
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```


### Apache Configuration
```
<VirtualHost *:80>
    ServerName docs.example.com

    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:8080/
    ProxyPassReverse / http://127.0.0.1:8080/
</VirtualHost>
```
