export type UseMyCollectionsProps = {
  componentsRender: {
    thumbnail: (props?: { src: string }) => JSX.Element;
    action: (props?: {
      id: string;
      handleBtnViewActionClick: (e: any) => void;
      handleBtnEditActionClick: (e: any) => void;
    }) => JSX.Element;
  };
};
