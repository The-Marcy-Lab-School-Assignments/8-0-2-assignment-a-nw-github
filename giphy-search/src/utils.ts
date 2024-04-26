const API_ROOT = `${window.location.origin}/api/v1`;

const fetchJson = async <T>(
  endpoint: string,
  params: Record<string, string | number | boolean | undefined>
): Promise<T | undefined> => {
  const url = new URL(`${API_ROOT}/${endpoint}`);
  for (const key in params) {
    const val = params[key];
    if (val !== undefined) {
      url.searchParams.set(key, String(val));
    }
  }

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("earth shattering kaboom");
    }

    return (await res.json()) as T;
  } catch (err) {
    console.error(err);
    return;
  }
};

export type Image = {
  id: string;
  title: string;
  images: {
    original: {
      height: string;
      width: string;
      url: string;
    };
  };
};

export type ImageResponse = {
  data: Image[];
};

export type Rating = "g";

export const fetchTrending = async (
  params: {
    limit?: number;
    rating?: Rating;
  } = {}
) => {
  return await fetchJson<ImageResponse>(
    "gifs",
    Object.assign(params, { limit: 3, rating: "g" })
  );
};

export const fetchSearch = async (params: { search: string; limit?: number; rating?: Rating }) => {
  return await fetchJson<ImageResponse>(
    "gifs",
    Object.assign(params, { limit: 3, rating: "g" })
  );
};
