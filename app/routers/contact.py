from fastapi import FastAPI, Request, Form, APIRouter
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
import os

router = APIRouter()
templates = Jinja2Templates(directory="templates/")


@router.get("/contact", response_class=HTMLResponse)
def form_get(request: Request):
    return templates.TemplateResponse('contact.html', context={'request': request})

@router.post('/contact')
async def contact(name: str = Form(...), email: str = Form(...), message:str = Form(...)):
    print(f'name:\t\t{name}\nemail:\t\t{email}\nmessage:\t\t{message}\n')
    return {'name':name,'email':email,'message':message}
