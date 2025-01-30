export const createUser = async (payload) => {
  try {
    const data = await fetch("/users", {
      method: "POST",
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
