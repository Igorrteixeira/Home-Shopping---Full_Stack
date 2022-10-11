import { useState, useEffect } from "react";
import axios from "axios";
import { URL_BASE, token } from "../constants/URL_BASE";

export const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    await axios
      .get(`${URL_BASE}${url}`, token)
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch((error) => {
        setData(error.response.data)
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, loading };
};