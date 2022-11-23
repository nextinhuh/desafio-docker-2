FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

#RUN unlink /etc/nginx/sites-available/default

#COPY nginx.config /etc/nginx/sites-available

#RUN ln -s /etc/nginx/sites-available/nginx.config /etc/nginx/sites-enabled/
