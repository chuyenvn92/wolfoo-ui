import sanityClient from "../../client";

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
    const diaries = await sanityClient.fetch(diariesQuery);

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
    const diary = await sanityClient.fetch(diaryQuery, { slug });

    return diary;
  } catch (error) {
    return error;
  }
};
