from fastapi import FastAPI, Request, Form, APIRouter
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
import os

class Project:
    '''
    basic project template
    '''
    def __init__(self,title,desc,img_url):
        '''
        project has title and description.
        '''
        self.title=title
        self.desc=desc
        self.img=img_url
        

router = APIRouter()
templates = Jinja2Templates(directory="templates/")


@router.get("/portfolio", response_class=HTMLResponse)
def portfolio(request: Request):
    return templates.TemplateResponse('portfolio.html', context={'request': request})

features=[]
@router.get("/portfolio/{pid}", response_class=HTMLResponse)
async def portfolio_details(request: Request,pid:int):
    if pid==1:
        proj=Project('Search engine spider','A Python library that queries Google, Bing, Yahoo and other search engines and collects the results from multiple search engine results pages. Please note that web-scraping may be against the Terms of Service of some search engines, and may result in a temporary ban.','/images/portfolio_1.webp')
        features=['Can save output files.','Search operators url,title, text are supported','HTTP and SOCKS proxy support.','Can collect dark web links with Torch.','Easily extensible.']        
        return templates.TemplateResponse('portfolio_details.html', context={'request': request,'title':proj.title,'desc':proj.desc,'img':proj.img,'features':features})
    elif pid==2:
        proj=Project('Reddit APOD bot','Simple bot that uses reddit\'s praw api to post picture aquired with NASA APOD api, comments with desription of that image and it\'s author.','/images/portfolio_2.webp')
        features=['posts image to subreddit made for it','comments the description of image','optional:sets the wallpaper to that same image']
        return templates.TemplateResponse('portfolio_details.html', context={'request': request,'title':proj.title,'desc':proj.desc,'img':proj.img,'features':features})
    elif pid==3:
        proj=Project('This website','A static simple website ready to deploy. This repo includes all the files and it is ready to deploy to Heroku','/images/portfolio_3.webp')
        features=['.env','.gitignore','app','Procfile','README.md','requirements.txt','runtime.txt','static','templates']
        return templates.TemplateResponse('portfolio_details.html', context={'request': request,'title':proj.title,'desc':proj.desc,'img':proj.img,'features':features})


