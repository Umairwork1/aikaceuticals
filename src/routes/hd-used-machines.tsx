import { createFileRoute } from '@tanstack/react-router';
import UsedMachines from '../pages/used-machines/UsedMachines';

export const Route = createFileRoute('/hd-used-machines')({
  component: UsedMachines,
});
