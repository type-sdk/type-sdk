import { useEffect, useState } from "react";

const useContent = ({ baseUrl, key, secret, projectId }) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getEntries = async (body) => {
    const token = key + ":" + secret;

    setIsLoading(true);
    setIsLoaded(false);

    const response = await fetch(
      `${this.baseUrl}/api/projects/${this.projectId}/content`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    setIsLoading(false);
    setIsLoaded(true);

    return data;
  };

  return { content, isLoading, isLoaded, getEntries };
};

export default useContent;
