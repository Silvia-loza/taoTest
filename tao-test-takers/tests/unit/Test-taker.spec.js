import { shallowMount } from '@vue/test-utils'
import TestTaker from '@/components/test-taker.vue'

describe("Header works", () => {
    it("renders the component", () => {

        //arrange item to be mounted
        const wrapper = shallowMount(TestTaker)

        //assert that the component is mounted and that it matches the snapshot creted, will inform us about changes.
        expect(wrapper.html()).toMatchSnapshot()
    })
})