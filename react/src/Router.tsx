import { Routes, Route } from 'react-router-dom';

import { RouteAuthGuard } from './components/templates/RouterAuthGuard';
import { HostRoomsEdit, HostRoomsIndex, HostRoomsNew, RoomsIndex, RoomsShow, SignIn, Status, Top, UserEdit } from './components/pages';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Top />} />
      <Route path="/auth/sign_in" element={<SignIn />} />
      <Route path="/rooms" element={<RoomsIndex />} />
      <Route path="/rooms/:room_id" element={<RoomsShow />} />
      <Route path="/host/rooms" element={<RouteAuthGuard component={<HostRoomsIndex />} redirect={'/auth/sign_in'} />} />
      <Route path="/host/rooms/:room_id/edit" element={<RouteAuthGuard component={<HostRoomsEdit />} redirect={'/auth/sign_in'} />} />
      <Route path="/host/rooms/new" element={<RouteAuthGuard component={<HostRoomsNew />} redirect={'/auth/sign_in'} />} />
      <Route path="/user" element={<RouteAuthGuard component={<UserEdit />} redirect={'/auth/sign_in'} />} />
      <Route path="/status" element={<Status />} />
      <Route path="*" element={<>404</>} />
    </Routes>
  );
};

export default Router;
