from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .library.helpers import *
from app.routers import twoforms, unsplash, accordion , portfolio, root, contact

from fastapi_cache.types import CacheControl
from fastapi_cache.middleware import CacheControlMiddleware


app = FastAPI()
app.add_middleware(CacheControlMiddleware, cache_control=CacheControl("public,max-age=31536000"))


templates = Jinja2Templates(directory="templates")

app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(unsplash.router)
app.include_router(twoforms.router)
app.include_router(accordion.router)
app.include_router(portfolio.router)
app.include_router(root.router)
app.include_router(contact.router)



@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    data = openfile("home.md")
    return templates.TemplateResponse("page.html", {"request": request, "data": data})


@app.get("/page/{page_name}", response_class=HTMLResponse)
async def show_page(request: Request, page_name: str):
    data = openfile(page_name+".md")
    return templates.TemplateResponse("page.html", {"request": request, "data": data})


@app.get('/.well-known/pki-validation/54FB3144DD399E44DE06E34EEFB24B35.txt')
async def https_validation(request: Request):
    return templates.TemplateResponse("54FB3144DD399E44DE06E34EEFB24B35.txt", {"request": request})
