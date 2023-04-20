import { notification as NotificationAntd } from 'antd';
import { useEffect } from 'react';

import { useGlobalContext } from './useGlobalContext';

export const useNotification = () => {
  const [api, contextHolder] = NotificationAntd.useNotification();
  const { notification } = useGlobalContext();

  useEffect(() => {
    if (notification?.message && notification.type) {
      api[notification.type]({
        message: `${notification.message}`,
        description: notification.description,
        placement: 'topRight',
      });
    }
  }, [notification]);

  return {
    api,
    contextHolder,
  };
};