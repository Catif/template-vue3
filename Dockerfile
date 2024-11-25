FROM node:18-alpine as build-stage

# Définit le dossier 'app' comme dossier de travail
WORKDIR /app

# Copie 'package.json' et 'package-lock.json'
COPY package*.json ./

# Installe les dépendances du projet
RUN npm install --production && npm cache clean --force

# Copie les fichiers du projet dans le dossier de travail
COPY . .

# Construit l'app pour la production
RUN npm run build

FROM nginx:stable-alpine as production-stage

# Copie les fichiers du build dans le dossier Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Ajout d'une configuration nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
