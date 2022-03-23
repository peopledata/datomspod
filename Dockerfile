FROM python:3.8
LABEL developer="jerry.zhang<jerry.zhang.bill@gmail.com>"
RUN apt update && apt install -y vim gcc libpq-dev && apt-get clean
# install nodejs ^14.x
# RUN curl -sL https://deb.nodesource.com/setup_14.x — Node.js 14 LTS "Fermium" | bash -
# RUN apt-get install -y nodejs
# install datomspace package
# RUN npm install datomspace
# install kopf k8s python package
RUN pip3 install kopf
RUN pip3 install kubernetes
RUN pip3 install web3
RUN pip3 install psycopg2
# RUN pip3 install eth_account

COPY datomspod /datomspod
WORKDIR /datomspod
CMD python3.8 /datomspod/dothejob.py
