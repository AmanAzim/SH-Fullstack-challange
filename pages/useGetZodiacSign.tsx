import { useState, useCallback, useEffect } from 'react';
import { zodiacSigns } from "../clients/mockDB";

type ZodiacSign = typeof zodiacSigns[0];

type Result = {
  loadZodiacSign: () => Promise<void>;
  setSelectedSandwicheLabels: (label: string) => void;
  sandwicheLabels: string[];
  zodiacSign: ZodiacSign | null;
  isLoading: boolean;
  isLoadButtonDisabled: boolean;
  error?: Error | unknown;
};

function useGetZodiacSign(): Result {
  const [sandwicheLabels, setSandwicheLabels] = useState<string[]>([]);
  const [zodiacSign, setZodiacSign] = useState<ZodiacSign | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | unknown>(null);

  useEffect(() => {
    if (zodiacSign) {
        setZodiacSign(null);
    }
  }, [sandwicheLabels]);

  const setSelectedSandwicheLabels = (label: string) => setSandwicheLabels((prevValues) => {
    if (prevValues.length === 3) {
        return [ ...prevValues.slice(1), label ];
    }

    if (prevValues.includes(label)) {
        return prevValues.filter(value => value !== label);
    }
 
    return [ ...prevValues, label ];
  });

  const loadZodiacSign = useCallback(async (): Promise<void> => {
    setError(null);
    setIsLoading(true);
    setZodiacSign(null);

    try {
      const response = await fetch('http://localhost:3000/api/zodiacSigns', {
        method: 'post',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ sandwiches: sandwicheLabels })
      });
      const result = await response.json();

      setZodiacSign(result);
      setIsLoading(false);
    } catch (error: Error | unknown) {
      setError(error);
      setIsLoading(false);
    }
  }, [sandwicheLabels]);

  return { 
      loadZodiacSign, 
      setSelectedSandwicheLabels, 
      zodiacSign, 
      sandwicheLabels, 
      isLoading,
      isLoadButtonDisabled: isLoading || sandwicheLabels.length < 3, 
      error,
    };
}

export default useGetZodiacSign;
