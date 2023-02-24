FROM python:3
COPY ./requirements.txt /requirements.txt
WORKDIR /
RUN pip install -r requirements.txt
RUN pip install flask
COPY . /
ENTRYPOINT [ "python3" ]
CMD ["app5.py"]