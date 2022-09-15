import { AuthUserProvider } from "../../providers";

interface Props {
  children: React.ReactNode
}

export const Providers: React.FC<Props> = (props) => {
  return (
    <AuthUserProvider>
      {props.children}
    </AuthUserProvider>
  );
}
