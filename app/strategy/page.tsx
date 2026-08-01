import { Metadata } from 'next';
import { StrategyContent } from '@/components/sections/StrategyContent';

export const metadata: Metadata = {
  title: "The Blueprint | Strategic Architecture",
  description: "My calculated process for building high-impact digital assets. Zero waste, maximum authority.",
};

export default function StrategyPage() {
  return <StrategyContent />;
}
