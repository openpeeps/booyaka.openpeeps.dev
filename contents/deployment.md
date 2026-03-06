---
title: "Deployment"
description: "Guidelines for deploying Booyaka documentation sites with containerization and reverse proxy configurations."
---

Deploying your Booyaka documentation is straightforward and can be accomplished using various methods.

## Reverse Proxy Configuration
Configure a reverse proxy for your Booyaka documentation site.

Booyaka can be configured to work behind a reverse proxy. This is useful if you want to serve your documentation site from a specific subpath or domain while using a reverse proxy server like Nginx or Apache.


### Nginx Configuration
An example configuration for Nginx to set up a reverse proxy for Booyaka is as follows:
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
The following is an example configuration for Apache to set up a reverse proxy for Booyaka:
```
<VirtualHost *:80>
    ServerName docs.example.com

    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:8080/
    ProxyPassReverse / http://127.0.0.1:8080/
</VirtualHost>
```


### Systemd Service Configuration
To run Booyaka as a service on your server, you can create a systemd service file. 
This way Booyaka will start automatically on boot and can be managed using standard systemd commands. Create a file named `booyaka.service` in `/etc/systemd/system/` with the following content:

```
[Unit]
Description=Booyaka Documentation Service
After=network.target

[Service]
User=your-username
WorkingDirectory=/path/to/your/booyaka/project
ExecStart=/usr/bin/booyaka start .
Restart=always

[Install]
WantedBy=multi-user.target
```

## Static Site Deployment

<div class="alert alert-info rounded-4" role="alert">
  <div class="alert-content">
    Currently, Static site deployment is not fully supported. We are actively working on improving this feature and will provide updates as soon as it becomes available. Stay tuned for future releases!
  </div>
</div>

Booyaka can generate static files for your documentation site, which can be deployed to any static hosting service like GitHub Pages, Netlify, or Vercel.
In fact, you can use the GitHub Actions workflow provided in the [Booyaka GitHub repository](https://github.com/openpeeps/booyaka) to automate the deployment of your documentation site to GitHub Pages.

The provided workflow installs Booyaka (and its dependencies), builds the static site, and then deploys it to the `gh-pages` branch of your repository. **That's it! Your documentation site will be live on GitHub Pages.**