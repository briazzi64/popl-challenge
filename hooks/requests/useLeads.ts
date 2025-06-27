import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { leadsApi } from '../../api';
import { Lead } from '../../types/leads';

export function useLeadsList() {
  const { data, isPending } = useQuery({
    queryKey: ['leads', 'leads-list'],
    queryFn: async () => {
      const { data } = await leadsApi.getAll();
      return data;
    },
  });

  return { leads: data, isLeadsPending: isPending };
}

export function useLeadDetails(id: string) {
  const { data, isPending } = useQuery({
    queryKey: ['leads', id],
    queryFn: async () => {
      const { data } = await leadsApi.getById(id);
      return data;
    },
    enabled: !!id,
  });

  return { leadDetails: data, isLeadDetailsPending: isPending };
}

export function useCreateLead() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload: Lead) => {
      const { data } = await leadsApi.create(payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['leads'],
      });
    },
  });

  return { createLead: mutateAsync, isCreateLeadPending: isPending };
}
