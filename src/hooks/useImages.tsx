import { useQuery } from 'react-query';
import { getAnimalsImagesKey } from '../utils';
import { getAnimalsImagesApi } from '../services/http/images/queries';

export const useImages = () => {
    const {
        data,
        isLoading,
        refetch,
      } = useQuery([getAnimalsImagesKey], () => getAnimalsImagesApi(), {
        enabled: true,
        /* onError: async error => {
          await sendError({
            error,
            user,
            module: 'focus_admin',
            payload: {
              queryKey: getShipmentNotes,
              metadata: {
                functionName: 'getShipAddressApi',
                queryType: 'query',
              },
            },
          });
        }, */
      });
  
    return {
      data,isLoading,refetch
    };
  };