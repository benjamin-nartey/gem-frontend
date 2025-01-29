export const getAllVisitors = async (
  url: string,
  token: string | undefined
): Promise<VisitorProps[]> => {
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
    return data?.data?.visitors;
  } catch (error) {
    throw new Error(`Error fetching user: ${error}`);
  }
};
