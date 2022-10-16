FROM ruby:3.1.2-slim

ENV LANG C.UTF-8 \
  TZ Asia/Tokyo

WORKDIR /home/app/stay-in-shimane

RUN apt-get update -qq \
  && apt-get install -y --no-install-recommends \
  build-essential \
  default-libmysqlclient-dev \
  git \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

COPY Gemfile Gemfile.lock ./
RUN bundle config set path "vendor/bundle" \
  && bundle install --jobs=3 --retry=3

COPY . ./

COPY ./entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000
CMD ["bundle", "exec", "rails", "s", "-b", "0.0.0.0"]
