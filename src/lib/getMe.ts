export const getMe = async (
  url: string,
  token: string | undefined
): Promise<UserProps | null> => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // console.log({ data });
    return data?.data?.user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
