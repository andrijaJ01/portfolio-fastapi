from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .library.helpers import *
from app.routers import twoforms, unsplash , portfolio, root, contact,about

from fastapi_cache.types import CacheControl
from fastapi_cache.middleware import CacheControlMiddleware
#from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware



app = FastAPI(docs_url=None,redoc_url='/documentation')
app.add_middleware(CacheControlMiddleware, cache_control=CacheControl("public,max-age=31536000"))
#app.add_middleware(HTTPSRedirectMiddleware)


templates = Jinja2Templates(directory="templates")

app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(unsplash.router)
app.include_router(twoforms.router)
app.include_router(portfolio.router)
app.include_router(root.router)
app.include_router(contact.router)
app.include_router(about.router)
