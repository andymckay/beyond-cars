AUTHOR = 'Andy McKay'
SITENAME = 'BEYOND CARS 🌎'
SITEURL = 'http://localhost:8000'
SUBTEXT = 'About cars and why 🇨🇦 and the 🌎 needs to think beyond our windscreens and a future with fewer cars.'
COPYRIGHT = '2023 and beyond'

PATH = 'content'
THEME = 'themes/Papyrus'
THEME_STATIC_PATHS = ['static']
PLUGIN_PATHS = ['pelican-plugins']
PLUGINS = ['readtime', 'search', 'neighbors']

DISPLAY_PAGES_ON_MENU = True
DIRECT_TEMPLATES = (('index', 'search', 'tags', 'categories', 'archives',))
PAGINATED_TEMPLATES = {'index':None,'tag':None,'category':None,'author':None,'archives':24,}

# Site search plugin
SEARCH_MODE = "output"
SEARCH_HTML_SELECTOR = "main"
# Table of Content Plugin
TOC = {
    'TOC_HEADERS'       : '^h[1-3]', # What headers should be included in
                                     # the generated toc
                                     # Expected format is a regular expression
    'TOC_RUN'           : 'true',    # Default value for toc generation,
                                     # if it does not evaluate
                                     # to 'true' no toc will be generated
    'TOC_INCLUDE_TITLE': 'false',    # If 'true' include title in toc
}

TIMEZONE = 'America/Vancouver'

DEFAULT_LANG = 'en'

# Social widgets
SOCIAL = (
    ('github', 'https://github.com/andymckay/beyond-cars'),
    ('mastodon', 'https://hachyderm.io/@beyondcars'),
)

# Article share widgets
SHARE = (
    ("twitter", "https://twitter.com/intent/tweet/?text=Features&amp;url="),
    ("linkedin", "https://www.linkedin.com/sharing/share-offsite/?url="),
    ("reddit", "https://reddit.com/submit?url="),
    ("facebook", "https://facebook.com/sharer/sharer.php?u="),
    ("whatsapp", "https://api.whatsapp.com/send?text=Features - "),
    ("telegram", "https://telegram.me/share/url?text=Features&amp;url="),
)

DEFAULT_PAGINATION = 10
FAVICON_URLS = (
    ('icon', 'images/icon.svg'),
)
# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True