import { ReactNode } from "react";
import GlobalStyle from "../../../styles/GlobalStyle";
import Header from "../Header";
import Nav from "../Nav";
import { HideNavHeader } from "../../../stores/Common/common.store";
import { useRecoilValue } from "recoil";

interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  const hideNavHeader = useRecoilValue<boolean>(HideNavHeader);
  return (
    <>
      <GlobalStyle />
      {!hideNavHeader && (
        <>
          <Header />
          <Nav />
        </>
      )}
      <>{children}</>
    </>
  );
}
