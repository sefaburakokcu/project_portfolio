# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy the static website files to the Nginx HTML directory
COPY ./ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

