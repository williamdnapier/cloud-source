export default {
    namespaced: true,
    state: {
        lines: []
    },
    getters: {
        itemCount: state => state.lines.reduce((total, line) =>
            total + line.quantity, 0),
        totalPrice: state => state.lines.reduce((total, line) =>
            total + (line.quantity * line.resource.price), 0),

    },
    mutations: {
        addResource(state, resource) {
            let line  = state.lines.find(line => line.resource.id == resource.id);
            if (line != null) {
                line.quantity++;
            } else {
                state.lines.push({ resource: resource, quantity:1 });
            }
        },
        changeQuantity(state, update) {
            update.line.quantity =  update.quantity;
        },
        removeProduct(state, lineToRemove) {
            let index  = state.lines.findIndex(line => line == lineToRemove);
            if (index > -1) {
                state.lines.splice(index, 1);
            }
        },
        setCartData(state, data) {
            state.lines = data;
        }
    },
    actions: {
        loadCartData(context) {
            let data = localStorage.getItem("cart");
            if (data != null) {
                context.commit("setCartData", JSON.parse(data));
            }
        },
        storeCartData(context) {
            localStorage.setItem("cart", JSON.stringify(context.state.lines));
        },
        clearCartData(context) {
            context.commit("setCartData", []);
        },
        initializeCart(context, store) {
            context.dispatch("loadCartData");
            store.watch(state => state.cart.lines,
                () => context.dispatch("storeCartData"), { deep: true});
        }
    }
}