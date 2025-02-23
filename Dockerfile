# Сборка фронтенда
FROM node:22-alpine AS build
WORKDIR /app_front
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Настройка Nginx
FROM nginx:alpine
COPY --from=build /app_front/.next /usr/share/nginx/html
COPY --from=build /app_front/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
