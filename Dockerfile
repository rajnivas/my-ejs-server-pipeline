FROM node
EXPOSE 3000
RUN npm install
COPY package.json package.json
COPY . .
CMD ["npm", "start"]
