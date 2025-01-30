export const updateUserAction = async (payload) => {
  try {
    const data = await fetch(`/users/${payload.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const response = await data.json();

    return await response;
  } catch (e) {
    throw new Error(e);
  }
};
