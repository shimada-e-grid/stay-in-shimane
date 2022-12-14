# frozen_string_literal: true

module Api
  module V1
    module Host
      class RoomsController < ApplicationController
        before_action :set_room, only: %i[show update destroy]

        # GET /rooms
        def index
          @rooms = current_api_v1_user.rooms
          render json: @rooms
        end

        # GET /rooms/1
        def show
          render json: @room
        end

        # POST /rooms
        def create
          @room = current_api_v1_user.rooms.new(room_params)

          if @room.save
            render json: @room, status: :created, location: @room
          else
            render json: @room.errors.full_messages, status: :unprocessable_entity
          end
        end

        # PATCH/PUT /host/rooms/1
        def update
          if @room.update(room_params)
            render json: @room
          else
            render json: @room.errors.full_messages, status: :unprocessable_entity
          end
        end

        # DELETE /rooms/1
        def destroy
          @room.destroy
        end

        private

        # Use callbacks to share common setup or constraints between actions.
        def set_room
          @room = current_api_v1_user.rooms.find(params[:id])
        end

        # Only allow a list of trusted parameters through.
        def room_params
          params.require(:room).permit(:user_id, :name, :name_kana, :zip_code, :prefecture, :city, :address1,
                                       :address2, :maximum_capacity, :price, :description, :is_public)
        end
      end
    end
  end
end
