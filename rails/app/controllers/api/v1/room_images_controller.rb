# frozen_string_literal: true

module Api
  module V1
    class RoomImagesController < ApplicationController
      def create
        # 物件 取得
        # @room = Room.find(params[:id])
        @room = Room.find(2)
        # 物件画像 登録
        @image = @room.room_images.new(image_path: params[:image_path], room_id: 2)
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

      def images_params
        # params.require(:image_path).permit(:image_path)
      end
    end
  end
end
