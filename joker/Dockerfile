FROM fusuf/whatsasena:latest

RUN git clone https://github.com/jockersir/jocker_v2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/nijin-husni/media

CMD ["node", "bot.js"]
