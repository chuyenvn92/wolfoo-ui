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

export const getDrawIn = async () => {
  const drawinQuery = `*[_type == "drawin"]{
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
    const drawin = (await sanityClient.fetch(drawinQuery)) as IPicture[];

    return drawin;
  } catch (error) {
    return { error };
  }
};

export const getFindDifferent = async () => {
  const findDifferentQuery = `*[_type == "findDifferent"]{
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
    const findDifferent = (await sanityClient.fetch(findDifferentQuery)) as IPicture[];

    return findDifferent;
  } catch (error) {
    return { error };
  }
};
