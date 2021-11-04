<script>
import { defineComponent, toRefs, ref } from '@vue/composition-api'
import useIndexPage from './usePage/index'
export default defineComponent({
  setup(props, context) {
    const title = 'render title';
    const { state } = useIndexPage()
    const phone = ref('158888888888');
    const clickHandle = () => {
      console.log('click handle.');
    };
    const inputHandle = (e) => {
      state.title = e.target.value;
    };
    console.log(this, props, context, state, phone)
    return {
      phone,
      title,
      ...toRefs(state),
      clickHandle,
      inputHandle
    }
  },
  render() {
    return (
      <div class="container">
        <br /><br />
        test render {this.title}<input onChange={this.inputHandle}/>
      </div>
    )
  }
})
</script>
