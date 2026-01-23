import { createFileRoute } from '@tanstack/react-router';
import ROSystem from '../pages/ro-system/RoSystem';

export const Route = createFileRoute('/ro-system')({
  component: ROSystem,
});
