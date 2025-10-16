import { mount } from '@vue/test-utils';
import Dashboard from '@/views/Dashboard.vue';

describe('Dashboard.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Dashboard);
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the expected elements', () => {
    expect(wrapper.find('h1').text()).toBe('Dashboard');
    expect(wrapper.find('.metrics').exists()).toBe(true);
    expect(wrapper.find('.recent-jobs').exists()).toBe(true);
  });

  it('fetches data on mount', async () => {
    // Mock API call
    const fetchData = jest.fn();
    wrapper.vm.fetchData = fetchData;

    await wrapper.vm.$nextTick();
    expect(fetchData).toHaveBeenCalled();
  });
});