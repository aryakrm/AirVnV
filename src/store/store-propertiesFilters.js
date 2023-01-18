import { create } from 'zustand';

const useStorePropertiesFilters = create((set) => ({
    filterProps: {},
    addFilterProps: (newFilterProps) => {
        return set((state) => ({
            filterProps: { ...state.filterProps, ...newFilterProps },
        }));
    },
}));

export default useStorePropertiesFilters;
