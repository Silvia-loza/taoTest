import { shallowMount } from '@vue/test-utils'
import App from '@/App'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import TestTaker from '@/components/test-taker.vue'


describe("App works", () => {
    it("renders the component", () => {
        //arrange item to be mounted
        const wrapper = shallowMount(App)
        //assert that the component is mounted and that it matches the snapshot creted, will inform us about changes.
        expect(wrapper.html()).toMatchSnapshot()
    })
    const build = () => {
        const wrapper = shallowMount(App)
        return {
            wrapper,
            Header: () => wrapper.findComponent(Header),
            Footer: () => wrapper.findComponent(Footer),
            TestTaker: () => wrapper.findComponent(TestTaker),
        }
    }
    it("renders the right", () => {
        const { Footer, Header, TestTaker } = build()

        expect(Header().exists()).toBe(true)
        expect(Footer().exists()).toBe(true)
        expect(TestTaker().exists()).toBe(true)
    })
})



