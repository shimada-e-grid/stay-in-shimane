# frozen_string_literal: true

module Api
  module V1
    class RoomImagesController < ApplicationController
      def create
        # 物件 取得
        @room = Room.find(image_params[:room_id])
        # 物件画像 登録
        @image = @room.room_images.new(image_params)
        if @image.save
          render json: { status: 200, image: @image }
        else
          render json: { status: 500 }
        end
      end

      def show
        @image = RoomImage.find(params[:id])
        if @image
          render json: { status: 200, image: @image }
        else
          render json: { status: 500}
        end
      end

      private

      def image_params
        params.require(:image).permit(:image_path, :room_id)
      end
    end
  end
end
