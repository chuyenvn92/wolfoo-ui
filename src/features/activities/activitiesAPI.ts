import sanityClient from "../../client";

export interface IPicture {
  image: {
    asset: {
      url: string;
    };
  };
  file: {
    asset: {
      url: string;
    };
  };
}

export const getPictures = async () => {
  const picturesQuery = `*[_type == "picture"]{
    image{
      asset->{
      url
    },
  },
  file{
    asset->{
      url
    }
  }
}`;

  try {
    const pictures = (await sanityClient.fetch(picturesQuery)) as IPicture[];

    return pictures;
  } catch (error) {
    return { error };
  }
};
