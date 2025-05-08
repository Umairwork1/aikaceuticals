import { createFileRoute } from '@tanstack/react-router';
import Logistics from '../pages/logistics/Logistics';

export const Route = createFileRoute('/logistics-and-storage')({
  component: Logistics,
});
