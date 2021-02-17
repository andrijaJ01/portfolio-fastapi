from fastapi import FastAPI, Request, Form, APIRouter
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
import os
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart

def send(name,mail,message):
    msg=MIMEMultipart()
    msg['Subject'] = f'{name} wants to say hi'
    msg['From'] = 'loggerk420@gmail.com'
    message=f'{name}<{mail}>\n\n{message}'
    text = MIMEText(str(message))
    msg.attach(text)
    s = smtplib.SMTP('smtp.gmail.com', '587')
    s.ehlo()
    s.starttls()
    s.ehlo()
    s.login('loggerk420@gmail.com','mojasobasobica')
    s.sendmail('loggerk420@gmail.com', 'andrijajovanovic001@gmail.com', msg.as_string())
    s.quit()






router = APIRouter()
templates = Jinja2Templates(directory="templates/")


@router.get("/contact", response_class=HTMLResponse)
def form_get(request: Request):
    return templates.TemplateResponse('contact.html', context={'request': request})

@router.post('/contact')
async def contact(request: Request,name: str = Form(...), email: str = Form(...), message:str = Form(...)):
    print(f'name:\t\t{name}\nemail:\t\t{email}\nmessage:\t\t{message}\n')
    send(name,email, message)
    success=True
    return templates.TemplateResponse('contact.html', context={'request': request,'name':name,'email':email,'message':message,'success':success})
