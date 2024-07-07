# BreezeSend

Repo for the BreezeSend App

CODE STRUCTURE

# Structure:
- *components*: for defining granular components
    - _common_ - This will contain re-usable isolated components like button, input, tabs, etc.
    - _sections_ - This will contain reusable sections like navigation i.e sidebar, bottom navigation, etc.
- *features*: for high-level screens. This will have standard modules/features, the basic functionality of the site.
- *infrastructure*: keep all the configurations with respect to say forms, static lists, action messages, validation messages, etc.
    - _theme_ - This will contain the theme styles here (such as color palette, fonts,) and the logic of deciding which theme to use based on the User's preferences 
    - _navigation_: contains routing files
- *assets*
    - _icons_ - Keep all of your icons (SVGs) or any other format you usually use.
    - _images_ - Keep all of your images (background images), logos, etc.
- *services:* contains all of our logic for talking to external services. A sub-folder is created for each type of service that is to be created.


