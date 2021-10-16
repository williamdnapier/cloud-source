<template>
  <tr>
    <td>
      <input type='number' class='form-control-sm' style='width:5em' v-bind:value='qvalue' v-on:input='sendChangeEvent' />
    </td>
    <td>{{ line.resource.name }}}</td>
    <td class='text-right'>
      {{ line.resource.price | currency }}
    </td>
    <td class='text-right'>
      {{ (line.quantity * line.resource.price) | currency }}
    </td>
    <td class='text-center'>
      <button class='btn btn-sm btn-danger' v-on:click='sendRemoveEvent'>
        Remove
      </button>
    </td>
  </tr>
</template>
<script>
  export default {
    props: ['line'],
    data: function() {
      return {
        qvalue: this.line.quantity
      }
    },
    methods: {
      sendChangeEvent($event) {
        if ($event.target.value > 0) {
          this.$emit('quantity', Number($event.target.value));
          this.qvalue = $event.target.value;
        } else {
          this.$emit('quantity', 1);
          this.qvalue = 1;
          $event.target.value = this.qvalue;
        }
      },
      sendRemoveEvent() {
        this.$emit('remove', this.line);
      }
    }
  }
</script>
<!--
This component uses props which allows a parent component to provide data to its children. It has a prop called line which its parent will use to provide the line from the shopping cart that it will display to the user. This component also sends a custom event to communicate with its parent. When the user changes the value of the input element that displays the quantity or clicks the Remove button, the component will call this.$emit method to send an event to its parent component. This is another way to connect components to create features without having to use global features like the data store.
-->
