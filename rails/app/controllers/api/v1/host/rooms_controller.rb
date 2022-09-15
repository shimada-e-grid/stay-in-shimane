module Api
  module V1
    module Host
      class RoomsController < ApplicationController
        before_action :set_user, only: %i[ index ]
        before_action :set_room, only: %i[ show update destroy ]

        # GET /rooms
        def index
          @rooms = @user.rooms
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
            user = User.find(1)
            @room = user.rooms.find(params[:id])
          end
          
          def set_user
            @user = User.find(1)
          end

          # Only allow a list of trusted parameters through.
          def room_params
            params.require(:room).permit(:user_id, :name, :name_kana, :zip_code, :prefecture, :city, :address1, :address2, :maximum_capacity, :price, :description, :is_public)
          end
      end
    end  
  end
end