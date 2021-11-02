import Search from "./Search";

export default {
  title: "Components/Search",
  component: Search,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { Search },
  props: Object.keys(argTypes),
  // Storybook provides all the args in a $props variable.
  // Each arg is also available as their own name.
  template: '<search value="salut" />',
  
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Search",
};