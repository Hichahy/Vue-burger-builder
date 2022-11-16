import { mount } from "@vue/test-utils";
import HomePage from "../../src/components/homePage/HomePage.vue";

describe("HomePage component", () => {
  it("renders Home", () => {
    const wrapper = mount(HomePage);
    expect(wrapper.text()).toContain("Burger Builder Website");
  });
});
