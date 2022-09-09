import { Routes, Route } from 'react-router-dom';

import { HostRoomsEdit, HostRoomsIndex, HostRoomsNew, RoomsIndex, RoomsShow, SignIn, Status, Top, UserEdit} from './components/pages';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Top />} />
      <Route path="/auth/sign_in" element={<SignIn />} />
      <Route path="/rooms" element={<RoomsIndex />} />
      <Route path="/rooms/:room_id" element={<RoomsShow />} />
      <Route path="/host/rooms" element={<HostRoomsIndex />} />
      <Route path="/host/rooms/:room_id/edit" element={<HostRoomsEdit />} />
      <Route path="/host/rooms/new" element={<HostRoomsNew />} />
      <Route path="user" element={<UserEdit />} />
      <Route path="*" element={<>404</>} />
      <Route path="status" element={<Status />} />
    </Routes>
  );
};

export default Router;
