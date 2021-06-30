export type WorldOverviewType = {
  course: string;
  url: string;
  description: string;
  quiz: string;
  quickLinks: [
    {
      linkTitle: string;
      linkUrl: string;
    }
  ];
  partners: [
    {
      name: string;
      img: string;
      url: string;
    }
  ];
  content: [
    {
      title: string;
      videoInfo: string;
    }
  ];
  earn: [
    {
      title: string;
      linkUrl: string;
    }
  ];
  connect: [
    {
      title: string;
      linkUrl: string;
    }
  ];
};
