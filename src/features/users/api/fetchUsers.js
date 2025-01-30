export const fetchUsers = async () => {
  try {
    const data = await fetch("/users");
    const response = await data.json();

    return await response;
  } catch (e) {
    throw new Error(e);
  }
};
