# ShadeController
Simple web interface to control a window shade using the USBRelay library.

Runs on port 4400.

## URLs
* / - simple web page with "shades up" and "shades down" buttons
* /shades_up - sends a relay command to the first relay to activate the shade up button on the remote
* /shades_down - sends a relay command to the second relay to activate the shade down button on the remote

See [this link](https://techministry.blog/2018/10/03/network-control-of-window-shades-using-relays-a-raspberry-pi-zero-and-node-js/) for more information.
