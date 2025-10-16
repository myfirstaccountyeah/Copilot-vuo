import { ref } from 'vue';

export function usePagination(totalItems: number, itemsPerPage: number) {
    const currentPage = ref(1);
    const totalPages = ref(Math.ceil(totalItems / itemsPerPage));

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages.value) return;
        currentPage.value = page;
    };

    const nextPage = () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value++;
        }
    };

    const previousPage = () => {
        if (currentPage.value > 1) {
            currentPage.value--;
        }
    };

    return {
        currentPage,
        totalPages,
        goToPage,
        nextPage,
        previousPage,
    };
}