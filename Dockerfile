# Step 1: Use Node to build the app
FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Use NGINX to serve the production build
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
