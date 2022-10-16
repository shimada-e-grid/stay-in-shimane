# frozen_string_literal: true

module Api
  module V1
    class RoomImagesController < ApplicationController
      def create
        # 物件 取得
        @room = Room.find(image_params[:room_id])
        # 物件画像 登録
        @room.room_images.new(room_id: image_params[:room_id], image_path: image_params[:image_path1])
        @room.room_images.new(room_id: image_params[:room_id], image_path: image_params[:image_path2])
        @room.room_images.new(room_id: image_params[:room_id], image_path: image_params[:image_path3])
        if @room.save
          render json: { status: 200}
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
        params.require(:image).permit(:image_path1, :image_path2, :image_path3, :room_id)
      end
    end
  end
end
