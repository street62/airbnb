FROM node:16.15.0
COPY . .
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
