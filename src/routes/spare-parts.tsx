import { createFileRoute } from '@tanstack/react-router';
import SpareParts from '../pages/spare-parts/SpareParts';

export const Route = createFileRoute('/spare-parts')({
  component: SpareParts,
});
