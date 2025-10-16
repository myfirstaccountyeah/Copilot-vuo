import { mount } from '@vue/test-utils';
import Button from '@/components/ui/Button.vue';

describe('Button.vue', () => {
  it('renders props.label when passed', () => {
    const label = 'Click Me';
    const wrapper = mount(Button, {
      props: { label }
    });
    expect(wrapper.text()).toMatch(label);
  });

  it('emits a click event when clicked', async () => {
    const wrapper = mount(Button);
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('applies the correct class based on props', () => {
    const wrapper = mount(Button, {
      props: { variant: 'primary' }
    });
    expect(wrapper.classes()).toContain('bg-blue-500');
  });
});