export const register = async (payload: {
  email: string;
  userName: string;
}) => {
  const response = await fetch(
    "https://back.boson-higgs.link/api/accounts/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  return await response.json();
};

export const getProfile = async () => {
  const response = await fetch(
    "https://back.boson-higgs.link/api/accounts/about-me",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return await response.json();
};

export const login = async (payload: { email: string; password: string }) => {
  const response = await fetch(
    "https://back.boson-higgs.link/api/authorize/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  return await response.json();
};

export const refreshToken = async (payload: {
  accessToken: string;
  refreshToken: string;
}) => {
  const response = await fetch(
    "https://back.boson-higgs.link/api/authorize/refresh-token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  return await response.json();
};

export const getLevels = async () => {
  const response = await fetch(
    "https://back.boson-higgs.link/api/levels/get-levels",
    {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return await response.json();
};

export const getLevelByToken = async (token: string) => {
  const response = await fetch(
    `https://back.boson-higgs.link/api/levels/by-token?token=${token}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return await response.json();
};

export const getLevelHint = async (id: string) => {
  const response = await fetch(
    `https://back.boson-higgs.link/api/levels/get-hint?id=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return await response.json();
};
