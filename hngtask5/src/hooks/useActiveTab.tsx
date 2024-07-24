import { useContext } from 'react';
import TabContext from '@/context/TabProvider';

const useActiveTab = () => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error('useActiveTab must be used within a TabProvider');
  }
  return context;
};

export default useActiveTab;
