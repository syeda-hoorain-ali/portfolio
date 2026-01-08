import { PortfolioData } from '@/types/portfolio';
import { useQuery } from '@tanstack/react-query';

const fetchPortfolioData = async (): Promise<PortfolioData> => {
  const response = await fetch('/api/me');

  if (!response.ok) {
    throw new Error('Failed to fetch portfolio data');
  }

  return response.json();
};

export const usePortfolioData = () => {
  return useQuery<PortfolioData, Error>({
    queryKey: ['portfolioData'],
    queryFn: fetchPortfolioData,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
    refetchOnWindowFocus: false,
  });
};
