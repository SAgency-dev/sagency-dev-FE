export type BlogArticleSection = {
  subTitle: string;
  sectionText: string;
};

export type BlogArticleContent = {
  sections: BlogArticleSection[];
  adPosition: number;
};

export enum Lang {
  EN = "en",
  RU = "ru",
  UA = "ua",
}

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

// TODO: finish these types when Blog will be work as supposed to be
