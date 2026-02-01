type IMetaData = {
  title?: string;
  keywords?: string[];
  description?: string;
  noIndex?: boolean;
};

export const APP_NAME = 'Forgelord';
export const APP_TAGLINE = 'Share your League prep with the community';
export const APP_BIO = 'Prep for League, together.';
export const APP_DESCRIPTION = 'Where you prepare for League. Refine your champion pool, runes, and items.';
export const DEFAULT_KEYWORDS = [APP_NAME, "League of Legends", "LoL"];

export const MetaData = ({ title, keywords, description, noIndex }: IMetaData) => {
  const normalizedKeywords = [...new Set((keywords ?? []).concat(DEFAULT_KEYWORDS))];
  return (
    <>
      <title>{title ? `${title} - ${APP_NAME}` : `${APP_NAME} - ${APP_TAGLINE}`}</title>
      <meta name="description" content={description ?? APP_DESCRIPTION} />
      <meta name="keywords" content={normalizedKeywords.join()} />
      {noIndex && <meta name="robots" content="noindex" data-rh="true" />}
    </>
  );
};
