# frozen_string_literal: true

module Api
  module V1
    class RoomsController < ApplicationController
      before_action :set_room, only: %i[show update destroy]

      # GET /rooms
      def index
        @rooms = Room.all

        @rooms = @rooms.where(prefecture: room_search_params['prefecture']) if room_search_params['prefecture'].present?
        @rooms = @rooms.where('name like ?', "%#{room_search_params['name']}%") if room_search_params['name'].present?

        render json: @rooms
      end

      # GET /rooms/1
      def show
        render json: @room
      end

      # POST /rooms
      def create
        @room = Room.new(room_params)
        @room.user_id = 1
        # @room.user_id = current_api_v1_user.id
        @room.zip_code = "693-0011"
        @room.prefecture = 32
        @room.city = "33032"
        @room.address1 = "address1"
        @room.address2 = "address2"
        @room.maximum_capacity = 40
        @room.description = "説明"

        if @room.save
          render json: { status: 200, room: @room }
        else
          render json: { status: 500 }
        end
      end

      # PATCH/PUT /rooms/1
      def update
        if @room.update(room_params)
          render json: @room
        else
          render json: @room.errors, status: :unprocessable_entity
        end
      end

      # DELETE /rooms/1
      def destroy
        @room.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_room
        @room = Room.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def room_params
        params.require(:room).permit(:user_id, :name, :name_kana, :zip_code, :prefecture, :city, :address1,
                                     :address2, :maximum_capacity, :price, :description, :is_public)
      end

      def room_search_params
        params.fetch(:search, {}).permit(:name, :prefecture)
      end
    end
  end
end
