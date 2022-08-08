# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::StatusesController, type: :routing do
  describe 'routing' do
    it 'routes to #show' do
      expect(get: '/api/v1/status').to route_to('api/v1/statuses#show')
    end
  end
end
