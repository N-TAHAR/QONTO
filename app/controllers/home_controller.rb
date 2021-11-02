class HomeController < ApplicationController
  def index
    api = Prismic.api('https://qonto-test-najib.prismic.io/api/v1')
    response = api.query(Prismic::Predicates.at("document.type", "home"))
    @document = response.results.first
  end
end
