export type UseTabsPageProps = {
  componentsRender: {
    thumbnail: (props?: { src: string }) => JSX.Element;
    user: (props?: { name: string, avatar: string }) => JSX.Element;
    action: (props?: {
      id: string;
      handleBtnViewActionClick: (e: any) => void;
      handleBtnEditActionClick: (e: any) => void;
      handleBtnRemoveActionClick: (e: any) => void;
    }) => JSX.Element;
  };
};
