interface Links {
  [category: string]: {
    [subcategory: string]: Array<{
      title: string;
      link: string;
      desc?: string;
    }>;
  };
}