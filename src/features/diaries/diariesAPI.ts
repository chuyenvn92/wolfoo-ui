import sanityClient from "../../client";

export const getDiaries = async () => {
  const diariesQuery = `*[_type == "chef"]{
        name,
        _createdAt,
        bio,
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
