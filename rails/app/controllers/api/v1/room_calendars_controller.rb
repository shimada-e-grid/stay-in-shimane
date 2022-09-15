module Api
  module V1
    class RoomCalendarsController < ApplicationController
      # GET /api/v1/rooms/1/room_calendars
      def index
        @room = Room.find(params[:room_id])
        # 休業日
        @holiday_calendars = @room.holidays
        # 予約済日
        @reserved_calendars = @room.reserveds

        render json: @holiday_calendars + @reserved_calendars
      end
    end
  end
end
