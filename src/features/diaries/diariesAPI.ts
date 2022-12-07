import sanityClient from "../../client";

export interface IDiary {
  title: string;
  _createdAt: string;
  description: any;
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    };
  };
}

export const getDiaries = async () => {
  const diariesQuery = `*[_type == "diary"]{
        title,
        _createdAt,
        description,
        slug,
        image{
          asset->{
          _id,
          url
        },
      }
    }`;

  try {
    const diaries = (await sanityClient.fetch(diariesQuery)) as IDiary[];

    return diaries;
  } catch (error) {
    return { error };
  }
};

export const getDetailDiary = async (slug: string) => {
  const diaryQuery = `*[slug.current == $slug]{
          title,
        _createdAt,
        description,
        slug,
        image{
          asset->{
          _id,
          url
        },
      }
      }`;

  try {
    const diary = (await sanityClient.fetch(diaryQuery, { slug })) as IDiary[];

    return diary;
  } catch (error) {
    return error;
  }
};
