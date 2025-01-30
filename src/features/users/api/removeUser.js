export const removeUserAction = async (id) => {
  try {
    const data = await fetch(`/users/${id}`, {
      method: "DELETE",
    });
    const response = await data.json();

    return await response;
  } catch (e) {
    throw new Error(e);
  }
};
