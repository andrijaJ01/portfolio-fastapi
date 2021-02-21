from fastapi import FastAPI, Request, Form, APIRouter
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
import os

router = APIRouter()
templates = Jinja2Templates(directory="templates/")


@router.get("/portfolio", response_class=HTMLResponse)
def form_get(request: Request):
    return templates.TemplateResponse('portfolio.html', context={'request': request})
