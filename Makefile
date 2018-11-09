all:
	universal-template src/index.html src/templates.html index.3.html && wget -O resume.pdf https://docs.google.com/document/d/1jpRePU5O0_mVabea1HAyH6IiFgr6pla4kvJYOG08Ufw/export?format=pdf