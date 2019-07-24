FROM NODE:v10.15.3

WORKDIR /app

COPY . .

RUN npm install

CMD node ./backend/index.js