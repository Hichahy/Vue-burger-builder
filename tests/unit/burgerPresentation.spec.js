import { mount } from "@vue/test-utils";
import BurgerPresentation from "../../src/components/burgerPresentation/BurgerPresentation.vue";

describe("BurgerPresentation component", () => {
  let wrapper;
  let ingredients;
  beforeEach(() => {
    wrapper = mount(BurgerPresentation);
    ingredients = wrapper.find("li");
  });

  it("should render BurgerPresentation", () => {
    wrapper = mount(BurgerPresentation);
    expect(wrapper.text()).toContain("Your crazy burger");
  });

  it("should display ingeadients", () => {
    expect(ingredients.text()).toContain("🥩");
  });

  it("should adittion price", async () => {
    const price = wrapper.find('[data-test="price"]');
    const addMeat = ingredients.find('[data-test="add"]');
    await addMeat.trigger("click");
    expect(price.text()).toContain("Price: 10$");
  });

  it("should substract price", async () => {
    const price = wrapper.find('[data-test="price"]');
    const addMeat = ingredients.find('[data-test="add"]');
    const substractMeat = ingredients.find('[data-test="substract"]');
    await addMeat.trigger("click");
    expect(price.text()).toContain("Price: 10$");
    await substractMeat.trigger("click");
    expect(price.text()).toContain("Price: 0$");
  });

  it("should show meat when aded", async () => {
    const addMeat = ingredients.find('[data-test="add"]');
    await addMeat.trigger("click");
    expect(wrapper.html()).toContain('<div class="meat"></div>');
  });

  it("should chnage to black bun", async () => {
    const toggle = wrapper.find("label");
    await toggle.trigger("click");
    expect(wrapper.html()).toContain('<div class="bun-bottom-black"></div>');
  });
});
