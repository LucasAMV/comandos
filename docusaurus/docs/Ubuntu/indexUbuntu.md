---
#sidebar_label: ''
#sidebar_position: 1
---

# DNS Stub Listener

Step 1: Edit the systemd-resolved ConfigurationOpen the resolved configuration file in your terminal using a text editor like nano
```bash
sudo nano /etc/systemd/resolved.conf
```

Find the line #DNSStubListener=yes (or DNSStubListener), uncomment it (remove the #), and change it to:
```
DNSStubListener=no
```

Restart systemd:
```bash
sudo systemctl restart systemd-resolved
```

Check listener up:
```bash
ss -tunsl | grep 53
```