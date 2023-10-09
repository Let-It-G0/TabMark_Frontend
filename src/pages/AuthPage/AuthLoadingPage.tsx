import { useSocialLogin } from "../../hooks/Auth/useSocialLogin";
import useHideNavHeader from "../../hooks/Common/useHideNavHeader";

export default function AuthLoadingPage() {
  useHideNavHeader();
  useSocialLogin();
  return <div>로딩중...</div>;
}
