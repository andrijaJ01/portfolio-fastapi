

## Overview

A static simple website ready to deploy.
This repo includes all the files and it is ready to deploy to Heroku.

- .env
- .gitignore
- app
- Procfile
- README.md
- requirements.txt
- runtime.txt
- static
- templates

## Requirement

See requirements.txt.

## Installation & Usage

```bash
$ git clone github.com/andrijaj01/portfolio-fastapi.git
# Or using downloaded zip file 
$ unzip portfolio-website.zip

# change the directory
$ cd portfolio-website
# install packages
$ pip install -r requirements.txt
# start the server
$ uvicorn app.main:app --reload --port 8080 --host 0.0.0.0
```

Visit [http://0.0.0.0:8080/](http://0.0.0.0:8080/).

![Starting](./images/image-1.png)

## Features

- Menu
- Gallery
- Accordion
- Portfolio
- Markdown pages

## Test

All tests are under `tests` directory.

```bash
# Change the directory
$ cd portfolio-fastapi
# Run tests
$ pytest -v
```



## Licence

【MIT License】

Copyright 2021 Andrija Jovanovic

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
# portfolio-fastapi
