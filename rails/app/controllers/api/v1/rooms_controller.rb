module Api
  module V1
    class RoomsController < ApplicationController
      before_action :set_room, only: %i[ show update destroy ]

      # GET /rooms
      def index
        @rooms = Room.all
        
        if room_search_params['prefecture'].present?
          @rooms = @rooms.where(prefecture: room_search_params['prefecture'])
        end
        if room_search_params['name'].present?
          @rooms = @rooms.where('name like ?', "%#{room_search_params['name']}%")
        end
         
        render json: @rooms
      end

      # GET /rooms/1
      def show
        render json: @room
      end

      # POST /rooms
      def create
        @room = Room.new(room_params)

        if @room.save
          render json: @room, status: :created, location: @room
        else
          render json: @room.errors, status: :unprocessable_entity
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
          params.require(:room).permit(:user_id, :name, :name_kana, :zip_code, :prefecture, :city, :address1, :address2, :maximum_capacity, :price, :description, :is_public)
        end

        def room_search_params
          params.fetch(:search, {}).permit(:name, :prefecture)
        end
    end
  end
end