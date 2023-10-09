import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { HideNavHeader } from "../../stores/Common/common.store";

const useHideNavHeader = () => {
  const setHideNavHeader = useSetRecoilState(HideNavHeader);

  useEffect(() => {
    setHideNavHeader(true);
    return () => setHideNavHeader(false);
  }, [setHideNavHeader]);
};

export default useHideNavHeader;
