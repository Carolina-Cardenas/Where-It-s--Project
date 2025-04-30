import React, { useState, useEffect } from "react";
import axios from "axios";

export const useEvents = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://santosnr6.github.io/Data/events.json"
        );
        setEvents(response.data.events || []);
      } catch (error) {
        setError(
          `The events could not be loaded. Please try again later. ${error.message}`
        );
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { isLoading, events, error };
};
