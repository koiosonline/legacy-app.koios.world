type SlugifyProps = {
  replaceSpaceWith?: string;
  lowerCase?: boolean;
  replaceDot?: string;
  replaceAmpersand?: string;
};

export const Slugify = (text: string, props?: SlugifyProps) => {
  let slug = text.replace(/[\\#,+()$~%'":*?<>{}]/g, "");

  props?.replaceSpaceWith
    ? (slug = slug.replace(/\s+/g, props.replaceSpaceWith))
    : (slug = slug.replace(/\s+/g, "-"));

  if (props?.lowerCase) {
    slug = slug.toLowerCase();
  }

  props?.replaceDot
    ? (slug = slug.replace(/\./g, `${props.replaceDot}`))
    : (slug = slug.replace(/\./g, ""));

  props?.replaceAmpersand
    ? (slug = slug.replace(/&/g, `${props.replaceAmpersand}`))
    : (slug = slug.replace(/&/g, ""));

  return slug;
};
