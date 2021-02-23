import { mount } from "@vue/test-utils";
import { Counter } from "@/components/Counter";

describe('Counter', () => {
    test('initial state is zero', () => {
        //Arrange
        const wrapper = mount(Counter)
        // Assert
        expect(wrapper.html()).toContain(0)
    })

    test('increment counter by 1 with no props', async () => {
        // Arrange
        const wrapper = mount(Counter)
        const button = wrapper.find('button')

        button.trigger('click')
        //assert
        expect(wrapper.html().toContain(1))
    })
});