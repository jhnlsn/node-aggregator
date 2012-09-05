# aggregator

Aggregate feeds from different feed locations

Currently a playground for implementing something very similar (almost exactly) to popurls.com

I wanted to see what it would take for me to write somthing like that in nodejs.

It turns out, its very easy!


## Demo
[http://r.scv.mx/](http://r.scv.mx/)


## Getting Started
Install Redis - not using redis yet

On osx using homebrew
```
brew install redis
```

After installing with brew you will get instructions similar to these
```
If this is your first install, automatically load on login with:
    mkdir -p ~/Library/LaunchAgents
    cp /usr/local/Cellar/redis/2.4.15/homebrew.mxcl.redis.plist ~/Library/LaunchAgents/
    launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.redis.plist

If this is an upgrade and you already have the homebrew.mxcl.redis.plist loaded:
    launchctl unload -w ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
    cp /usr/local/Cellar/redis/2.4.15/homebrew.mxcl.redis.plist ~/Library/LaunchAgents/
    launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.redis.plist

  To start redis manually:
    redis-server /usr/local/etc/redis.conf

  To access the server:
    redis-cli
```


On nix systems

```
git clone http://github.com/antirez/redis.git
cd redis/src
make
sudo make install
cd ../..
rm -rf redis
```

Install the module with: `npm install aggregator`

```javascript
var aggregator = require('aggregator');
aggregator.awesome(); // "awesome"
```

## Todo
  Save off feeds in redis
  Move feed pulls into a module
  publish a live example

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 johnymonster  
Licensed under the MIT license.
