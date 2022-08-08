# frozen_string_literal: true

module Api
  module V1
    class StatusesController < ApplicationController
      # GET /api/v1/status
      def show
        render json: { status: :ok }
      end
    end
  end
end
