import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe("Header works", () => {
    it("renders the component", () => {

        //arrange item to be mounted
        const wrapper = shallowMount(Footer)

        //assert that the component is mounted and that it matches the snapshot creted, will inform us about changes.
        expect(wrapper.html()).toMatchSnapshot()
    })
})